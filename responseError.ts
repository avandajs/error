export default class runtimeError <DataType> extends Error{
    message: string;
    data: DataType | null;
    constructor(message: any,data: DataType | null = null) {
        super(message);
        this.message = message;
        this.data = data;
    }
}