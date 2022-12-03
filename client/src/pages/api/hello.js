const NFT = require("./../../../../server/models/nftModel");
const APIFeatures = require("./../../../../server/utils/apiFeatures");


exports.getAllNfts = catchAsync(async (req, res, next) => {
  // // BUILD QUERY
  const features = new APIFeatures(NFT.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .pagination();
  // console.log(JSON.stringify(features));
  const nfts = await features.query;
  //SEND QUERY
  res.status(200).json({
    status: "OK",
    results: nfts,
    data: {
      nfts,
    },
  });
});