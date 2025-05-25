export const{username,password}=process.env

export const connectionURI="mongodb+srv://"+username+":"+password+"@cluster0.uf1x9.mongodb.net/dataa?retryWrites=true&w=majority&appName=Cluster0"

console.log(username);
console.log(password);
