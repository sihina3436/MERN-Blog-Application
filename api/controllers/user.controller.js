export const test = (req,res) => {
    console.log("Hello From Server Side");
    res.json({"Message":"Hello From Serverside"})
}