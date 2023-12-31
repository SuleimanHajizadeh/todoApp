export class Model {
    user;
    items;

    constructor() {
        this.user = "Davud";
        this.items = [
            new TodoItem("Spor", false),
            new TodoItem("Kahvalti", false),
            new TodoItem("Kitap Okumak", false),
            new TodoItem("Sinema", false)
        ];
    }
}

export class TodoItem {
    description;
    action;

    constructor(description: string, action: boolean) {
        this.description = description;
        this.action = action;
    }
}