"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Image {
    constructor($imageId, $userid, $title, $description, $originalFileName, $uploadedFileName, $uploadFilePath) {
        //should be populated after successful insertion
        this.imageId = $imageId;
        this.userid = $userid;
        this.title = $title;
        this.description = $description;
        this.originalFileName = $originalFileName;
        this.uploadedFileName = $uploadedFileName;
        this.uploadFilePath = $uploadFilePath;
    }
    static fromJSON(json) {
        return new Image(json.imageId, json.userId, json.title, json.description, json.originalFileName, json.uploadedFileName, json.uploadFilePath);
    }
    /**
     * Getter $imageId
     * @return {string}
     */
    get $imageId() {
        return this.imageId;
    }
    /**
     * Getter $userid
     * @return {string}
     */
    get $userid() {
        return this.userid;
    }
    /**
     * Getter $title
     * @return {string}
     */
    get $title() {
        return this.title;
    }
    /**
     * Getter $description
     * @return {string}
     */
    get $description() {
        return this.description;
    }
    /**
     * Getter $fileName
     * @return {string}
     */
    get $originalFileName() {
        return this.originalFileName;
    }
    /**
     * Getter $uploadedFileName
     * @return {string}
     */
    get $uploadedFileName() {
        return this.uploadedFileName;
    }
    /**
     * Getter $uploadFilePath
     * @return {string}
     */
    get $uploadFilePath() {
        return this.uploadFilePath;
    }
    /**
     * Setter $imageId
     * @param {string} value
     */
    set $imageId(value) {
        this.imageId = value;
    }
    /**
     * Setter $userid
     * @param {string} value
     */
    set $userid(value) {
        this.userid = value;
    }
    /**
     * Setter $title
     * @param {string} value
     */
    set $title(value) {
        this.title = value;
    }
    /**
     * Setter $description
     * @param {string} value
     */
    set $description(value) {
        this.description = value;
    }
    /**
     * Setter $fileName
     * @param {string} value
     */
    set $originalFileName(value) {
        this.originalFileName = value;
    }
    /**
     * Setter $uploadedFileName
     * @param {string} value
     */
    set $uploadedFileName(value) {
        this.uploadedFileName = value;
    }
    /**
     * Setter $uploadFilePath
     * @param {string} value
     */
    set $uploadFilePath(value) {
        this.uploadFilePath = value;
    }
}
exports.default = Image;
//# sourceMappingURL=image.js.map