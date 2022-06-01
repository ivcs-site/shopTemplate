
// const functions = require('firebase-functions');
// const nodemailer = require('nodemailer');

// let mailTransportAuth = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 587,
//     secure: false,
//     requireTLS: true,
//     auth: {
//         user: 'mardonov.mexriddin1997@gmail.com',
//         pass: 'Mardonov3008'
//     }
// });

// export  const sendCodeOnEmail = functions.database.ref('/users/{userssId}/').onUpdate((snapshot, context) => {
//         var newCode = generateCode()
//         var key = Object.keys(snapshot.after.val())[0];

//         const c = snapshot.after.child(key).toJSON().toString();
//         const email = snapshot.after.child("email").exportVal();
//         const code = snapshot.after.child("code").exportVal();

//         snapshot.after.ref.update({'code': newCode});
//         const mailOptions = {
//             from: '"From me" <noreply@firebase.com>',
//             to: email,
//             text: "text"
//         };
//         mailOptions.subject = "Subject message";
//         console.log(snapshot);

//         try {
//             mailTransportAuth.sendMail(mailOptions);
//             console.log(`Email sent to:`, email);
//         } catch (error) {
//             console.error('There was an error while sending the email:', error);
//         }

//     console.log("Send code on email: " + email, " , code: " + code);

//     return null;
// });
// just for example to sending files to mail 



