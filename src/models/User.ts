class User
{
    // private instance members
    private m_username: string;
    private m_displayName: string;

    // public properties
    get username():string
    {
        return this.m_username;
    }

    set username(username: string)
    {
        this.m_username = username;
    }

    get displayName():string
    {
        return this.m_displayName;
    }

    set displayName(displayName: string)
    {
        this.m_displayName = displayName;
    }

    // constructor function
    constructor(username: string = "", displayName: string = "")
    {
        this.m_username = username;
        this.m_displayName = displayName;
    }

    // private methods

    // public methods
    public toString():string
    {
        return `username: ${this.username}\ndisplayName: ${this.displayName}`;
    }
}

export default User;