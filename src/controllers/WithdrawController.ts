import knex from '../database/connection';
import { Request, Response } from 'express';
import { AccountNotFoundError } from '../errors/AccountNotFoundError';
import { BalanceError } from '../errors/BalanceError';
import { LimitError } from '../errors/LimitError';
import { AccountProps } from '../model/Account';

class WithdrawController {

     /**
     * Realiza um saque da conta conforme número da conta e valor do saque.
     * @return conta com saldo atualizado.
     */
    async withdraw(request: Request, response: Response) {

       try {

        const { account_number } = request.params;
        const { withdrawal_amount } = request.body;

        /**
         * Busca a conta pelo seu número
         */
        const [accountFound] = await knex('account')
        .where('account_number', account_number) as [AccountProps];

        if (!account_number || !accountFound) {
            throw new AccountNotFoundError('Conta não encontrada');
        }

        /**
         * Verifica se o valor do saque é menor ou igual ao saldo disponível e
         * se o valor do saque é menor ou igual ao limit por transação.
         */
        const amountIsLessThanOrEqualToBalance = withdrawal_amount <= accountFound.balance;
        const amountIsLessThanOrEqualToLimit = withdrawal_amount <= accountFound.limit;

        if (!amountIsLessThanOrEqualToBalance) {
            throw new BalanceError(`O valor do saque é maior que o saldo B$ ${accountFound.balance} disponível na conta`);
        }

        if (!amountIsLessThanOrEqualToLimit) {
            throw new LimitError(`O valor do saque é maior que o limite B$ ${accountFound.limit} por transação disponível da conta`);
        }

        /**
         * Atualiza o saldo da conta e computa a taxa de saque
         */
        const balance = accountFound.balance - (withdrawal_amount + accountFound.fee);

        await knex('account')
        .where('account_number', '=', account_number)
        .update({balance})

        accountFound.balance = balance;

        return response.json({
            message: 'Saque realizado com sucesso',
            account: accountFound,
        });

       } catch (error) {

        console.error(error);

        if (error instanceof AccountNotFoundError) {
            return response.status(404).json({
                message: error.message,
                statusCode: 404,
            });
        }

        if (error instanceof BalanceError) {
            return response.status(400).json({
                message: error.message,
                statusCode: 400,
            });
        }

        if (error instanceof LimitError) {
            return response.status(400).json({
                message: error.message,
                statusCode: 400,
            });
        }

        return response.status(500).json({
            message: 'Não foi possível realizar o saque. Por favor entre em contato com a Cyber Bank',
            statusCode: 500,
        });

       }

    }

}

export default new WithdrawController();