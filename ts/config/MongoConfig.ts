
export class MongoConfig {
	public static default() {
		return {
			HOST: 'mongodb://localhost:27017/luxtrack'
			// HOST: process.env.MONGODB_URI 
		}
	}
}