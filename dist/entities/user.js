"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor($userid, $username) {
        this.userid = $userid;
        this.username = $username;
    }
    /**
     * Getter $userid
     * @return {string}
     */
    get $userid() {
        return this.userid;
    }
    /**
     * Getter $username
     * @return {string}
     */
    get $username() {
        return this.username;
    }
    /**
     * Setter $userid
     * @param {string} value
     */
    set $userid(value) {
        this.userid = value;
    }
    /**
     * Setter $username
     * @param {string} value
     */
    set $username(value) {
        this.username = value;
    }
}
exports.default = User;
//# sourceMappingURL=user.js.map