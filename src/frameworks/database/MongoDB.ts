// Import public libraries
import mongoose from 'mongoose';
import Database from './Database';

export default class MongoDB implements Database {
  /**
   * Constructor for MongoDB class.
   * @param {String} mongoURI the database URI in MongoDB format: mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
   */
  private constructor(private readonly _mongoURI: string) {}

  /**
   * Factory method to create a new MongoDB instance.
   * @param {String} mongoURI the database URI in MongoDB format: mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
   * @returns {MongoDB} a new MongoDB instance
   */
  public static create(mongoURI: string): MongoDB {
    return new MongoDB(mongoURI);
  }

  /**
   * Connect to MongoDB using the informed connection string.
   */
  public async connect(): Promise<void> {
    await MongoDB.connectDB(this._mongoURI);
  }

  /**
   * Connect to MongoDB using the informed connection string.
   * @param {String} MONGO_URI the database URI in MongoDB format: mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]
   */
  private static async connectDB(MONGO_URI: string) {
    await mongoose.connect(MONGO_URI);
    console.log('MongoDB connected');
  }
}
