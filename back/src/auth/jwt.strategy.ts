import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor() {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: false,
			secretOrKey: `${process.env.JWT_SECRET}`,
		});
	}

	async validate(payload: any) {
		console.log("oh my eggs");
		return { userId: payload.sub, username: payload.username };
	}
}
