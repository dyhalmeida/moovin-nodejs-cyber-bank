class LimitError extends Error {

    constructor(message: string) {
      super(message);
      this.name = 'LimitError';
    }
  
  }
  
  export { LimitError };