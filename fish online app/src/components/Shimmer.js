const Shimmer= ()=>{
return (
    <div className="fish-list">
         {
         Array(10)
         .fill("")
         .map((e,index)=>{<div key={index} className="fish-shimmer"><h1>hi</h1></div>})}
        </div>
)
}
export default Shimmer;