const nodemailer = require('nodemailer');
const path = require('path');
const hbs = require('nodemailer-express-handlebars').default

const trasposter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})

const options = {
    viewEngine: {
        extname: '.html',
        partialsDir: path.resolve('./src/recursos/email/'),
        defaultLayout: false
    },
    viewPath: path.resolve('./src/recursos/email/'),
    extName: '.html'
}

trasposter.use('compile', hbs(options));

const enviarEmail = async (para, link) =>{

    const mailOptions = {
        from: `"Tubagochi APP" <${process.env.EMAIL_USER}>,`,
        to: para,
        template: 'forgotPassword',
        context: {link},

    };

    return trasposter.sendMail(mailOptions);

}

module.exports = enviarEmail;