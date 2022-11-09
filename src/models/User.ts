/* class User
{
    // private instance members
    public username: string;
    public displayName: string;

    // constructor function
    constructor(username: string = "", displayName: string = "")
    {
        this.username = username;
        this.displayName = displayName;
    }

    // private methods

    // public methods
    public toString():string
    {
        return `username: ${this.username}\ndisplayName: ${this.displayName}`;
    }
} */

interface User
{
    username: string;
    displayName: string;
}

export default User;