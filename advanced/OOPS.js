 const user ={
    name : 'Jivu',
    getUserDetails : function(){
        console.log(`name: ${this.name}`);
        console.log(this);
    }
 }
//console.log(user.getUserDetails());
 // current context
 //ES^6\
 class User{
    constructor (username , email ,pass)
    {
        this.username=username;
        this.pass=pass;
        this.email=email;
    }
    logME(){
        console.log(`${this.username} is username`);
    }
    
 }
 class student extends User{
    
    constructor(mail,pass,name)
    {
        super(name) // saves bhaut time and of usinf .call funtion
        this.mail=mail
        this.pass=pass
    }
 }