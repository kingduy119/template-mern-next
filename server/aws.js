// const aws = require("aws-sdk");

// function sendEmail(options) {
//     aws.config.update({
//         region: "",
//         accessKeyId: "",
//         secretAccessKey: "",
//     });

//     const ses = new aws.SES({ apiVersion: "lastest" });

//     return new Promise((resolve, reject) => {
//         ses.sendEmail(
//             {
//                 Source: options.from,
//                 Destination: {
//                     CcAddresses: options.cc,
//                     ToAddresses: options.to,
//                 },
//                 Message: {
//                     Subject: {
//                         Data: options.subject,
//                     },
//                     Body: {
//                         Html: {
//                             Data: options.body,
//                         },
//                     },
//                 },
//                 ReplyToAddresses: options.replyTo,
//             },
//             (err, info) => {
//                 if (err) {
//                     reject(err);
//                 } else {
//                     resolve(info);
//                 }
//             },
//         );
//     });
// }

// module.exports = sendEmail;