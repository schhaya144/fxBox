const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'djwo4a4xu',
  api_key: '633511244378898',
  // 462758916368261
  api_secret: 'KTbow-GOeMqU36jjRUqB86wGcB0',
  // diZn0WoZgWBwUX0kmzLwjekeurA
});

module.exports = { cloudinary }; 


// CLOUDINARY_URL=cloudinary://<your_api_key>:<your_api_secret>@dtuheffdm