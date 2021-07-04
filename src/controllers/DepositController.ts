import knex from '../database/connection';
import { Request, Response } from 'express';
import { AccountNotFoundError } from '../errors/AccountNotFoundError';
import { AccountProps } from '../model/Account';

class DepositController {

     /**
     * Realiza um deposito na conta conforme número da conta e valor do depósito.
     * @return conta com saldo atualizado.
     */
    async deposit(request: Request, response: Response) {

       try {

        const { account_number } = request.params;
        const { deposit_amount } = request.body;

        /**
         * Busca a conta pelo seu número
         */
        const [accountFound] = await knex('account')
        .where('account_number', account_number) as [AccountProps]

        if (!account_number || !accountFound) {
            throw new AccountNotFoundError('Conta não encontrada');
        }

        /**
         * Atualiza o saldo da conta
         */
        const balance = accountFound.balance + deposit_amount;

        await knex('account')
        .where('account_number', '=', account_number)
        .update({balance})

        accountFound.balance = balance;

        return response.json({
            message: 'Depósito efetuado com sucesso',
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

        return response.status(500).json({
            message: 'Não foi possível realizar o saque. Por favor entre em contato com a Cyber Bank',
            statusCode: 500,
        });

       }

    }

}

export default new DepositController();