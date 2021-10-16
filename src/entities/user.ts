export default class User {

    private userid:string;
    private username:string;

	constructor($userid: string, $username: string) {
		this.userid = $userid;
		this.username = $username;
	}

    /**
     * Getter $userid
     * @return {string}
     */
	public get $userid(): string {
		return this.userid;
	}

    /**
     * Getter $username
     * @return {string}
     */
	public get $username(): string {
		return this.username;
	}

    /**
     * Setter $userid
     * @param {string} value
     */
	public set $userid(value: string) {
		this.userid = value;
	}

    /**
     * Setter $username
     * @param {string} value
     */
	public set $username(value: string) {
		this.username = value;
	}

}