import nodeMailer from 'nodemailer'



const handler = async (req, res) =>  {



   try {
 
    if (req.method !== 'POST') {
      return res.status(401).json({
        success: false,
        message: 'Invalid request method!',
      });
    }

    const email = req.body.email;
    const name = req.body.name
    const age = req.body.selectedAge
    const experiences = req.body.experiences
    const man = req.body.selectedValue
    console.log(name, email, age, experiences, man)


     // email exist + send link
    const transporter = nodeMailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
           user: process.env.user,
           pass: process.env.pass,
        },
      tls: {
          rejectUnauthorized: false
      }
      });

      
      const info = await transporter.sendMail({
        from: `${email}`, // sender address
        to: `p.sivak91@gmail.com`, 
        subject: "Postrazim Ocko a Shadowa!!!", // Subject line
        text: "Dog Care for Ocko & Shadow", // plain text body
        html: `
           <b>Ozval sa zaujemca z webstranky na postrazenie ocka a shadowa.</b><br/>
           <b>Meno : ${name}</b><br/>
           <b>email : ${email}</b><br/>
           <b>Experience with Dogs : ${experiences}</b><br/>
           <b>Age : ${age}</b><br/><br/><br/><br/><br/><br/>
           ` 
      }); 
  

 
    res.status(201).json({
      success: true,
      message: `The email has been sent! We will contact you shortly!`
      })

    
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong!',
    });
   }
  }




export default handler