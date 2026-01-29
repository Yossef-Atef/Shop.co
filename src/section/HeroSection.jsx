
import eg from "../assets/eg.jpg";
import AppButton from "../components/AppButton";
import DateText from "../components/DateText";
function HeroSection(){
return(

<div className=" bg-[#F2F0F1] w-full h-[663px] flex flex-row items-start justify-start">





<div className="w-[50%] h-screen flex flex-col justify-center items-start  gap-7 p-12  ">

<spen className="text-[60px] font-bold ">
    FIND CLOTHES THAT MATCHES YOUR STYLE
</spen>

  <div className="mt-4 text-lg ">
    Browse through our diverse range of meticulously crafted 
    garments,designed to bring out your individuality 
    and cater to your sense of style.
  </div>
 <AppButton />
<DateText />

</div>


<div className=" w-[50%] h-screen ">
<img src={eg}  className=" w-200 h-180 object-contain"/>
 </div>





 
</div>

)
}


export default HeroSection;






