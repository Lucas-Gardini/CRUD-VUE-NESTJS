import { Injectable } from "@nestjs/common";
import { User, UserDocument } from "./users.model";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class UsersService {
	constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {
		console.log(process.env.DEFAULT_USER);
	}

	async findUserByEmail(email: string) {
		return await this.userModel.findOne({ email });
	}
}
