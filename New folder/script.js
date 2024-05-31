// function showGreeting(name) {
//     console.log("Hello " + name + "!");
// }  
// setTimeout(()=>{
//     showGreeting("Anjali");
// },3000) ;



function fetchquote(){
    const url="https://api.kanye.rest/";
    const promise = fetch(url);
    promise.then((Response)=>{
        return Response.json();
    });
}
function addQuoteToDOM(quotedata){
    const {quote} = quotedata;
    const paragraph = document.createElement("p");
    paragraph.innerHTML=`${quote}`;
    document.body.append(paragraph);

}
addQuoteToDOM({quote:"hi bro"});