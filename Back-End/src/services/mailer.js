const nodemailer = require('nodemailer');
const path = require('path');
const hbs = require('nodemailer-express-handlebars')

const trasposter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

trasposter.use('compile', hbs({
    viewEngine: 'handlebars',
    viewPath: path.resolve('./src/recursos/email/'),
    extName: '.html'
}));

const enviarEmail = async (para, link) =>{

    const mailOptions = {
        from: `'Tubagochi APP' <${process.env.EMAIL_USER}>,`,
        to: para,
        template: 'forgotPassword',
        context: {link},

    };

    return trasposter.sendMail(mailOptions);

}

module.exports = enviarEmail;