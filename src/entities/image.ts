export default class Image {

    /* field names should exactly match with db table column names */
    private imageId:string;
    private userid:string;
    private title:string;
    private description:string;
    private originalFileName:string;
    private uploadedFileName:string;
    private uploadFilePath:string;

	constructor($imageId: string,$userid: string, $title: string, $description: string, $originalFileName: string, $uploadedFileName: string, $uploadFilePath: string) {
		//should be populated after successful insertion
        this.imageId = $imageId;
		this.userid = $userid;
		this.title = $title;
		this.description = $description;
		this.originalFileName = $originalFileName;
		this.uploadedFileName = $uploadedFileName;
		this.uploadFilePath = $uploadFilePath;
	}

    public static fromJSON(json:any):Image{
        return new Image(
            json.imageId,
            json.userId,
            json.title,
            json.description,
            json.originalFileName,
            json.uploadedFileName,
            json.uploadFilePath,
        );
    }


    /**
     * Getter $imageId
     * @return {string}
     */
	public get $imageId(): string {
		return this.imageId;
	}

    /**
     * Getter $userid
     * @return {string}
     */
	public get $userid(): string {
		return this.userid;
	}

    /**
     * Getter $title
     * @return {string}
     */
	public get $title(): string {
		return this.title;
	}

    /**
     * Getter $description
     * @return {string}
     */
	public get $description(): string {
		return this.description;
	}

    /**
     * Getter $fileName
     * @return {string}
     */
	public get $originalFileName(): string {
		return this.originalFileName;
	}

    /**
     * Getter $uploadedFileName
     * @return {string}
     */
	public get $uploadedFileName(): string {
		return this.uploadedFileName;
	}

    /**
     * Getter $uploadFilePath
     * @return {string}
     */
	public get $uploadFilePath(): string {
		return this.uploadFilePath;
	}

    /**
     * Setter $imageId
     * @param {string} value
     */
	public set $imageId(value: string) {
		this.imageId = value;
	}

    /**
     * Setter $userid
     * @param {string} value
     */
	public set $userid(value: string) {
		this.userid = value;
	}

    /**
     * Setter $title
     * @param {string} value
     */
	public set $title(value: string) {
		this.title = value;
	}

    /**
     * Setter $description
     * @param {string} value
     */
	public set $description(value: string) {
		this.description = value;
	}

    /**
     * Setter $fileName
     * @param {string} value
     */
	public set $originalFileName(value: string) {
		this.originalFileName = value;
	}

    /**
     * Setter $uploadedFileName
     * @param {string} value
     */
	public set $uploadedFileName(value: string) {
		this.uploadedFileName = value;
	}

    /**
     * Setter $uploadFilePath
     * @param {string} value
     */
	public set $uploadFilePath(value: string) {
		this.uploadFilePath = value;
	}

}