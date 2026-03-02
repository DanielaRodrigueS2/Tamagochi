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

const enviarEmail = async (para, assunto, texto) =>{

    const mailOptions = {
        from: `'Tubagochi APP' <${process.env.EMAIL_USER}>,`,
        to: para,
        subject: assunto,
        text: texto
    };

    return trasposter.sendMail(mailOptions);

}

module.exports = enviarEmail;