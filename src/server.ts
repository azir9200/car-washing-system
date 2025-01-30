import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function main() {
  try {
    await mongoose.connect(config.database_url as string, {});
    console.log('MongoDB Connected ✅');

    app.listen(config.port, () => {
      console.log(`Server is running on port ${config.port} 🚀`);
    });
  } catch (err) {
    console.error('MongoDB Connection Error ❌', err);
    process.exit(1); // Exit if connection fails
  }
}
main();
