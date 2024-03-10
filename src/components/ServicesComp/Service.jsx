import React from "react";
import Card from "./Card"; 
import madical from '../../Image/madical.png';
const Service = () => {
  return (
    <>
      <h1 className="text-center font-semibold text-4xl mt-4">Website or Application According to Your Bussiness</h1>
      <div className="flex justify-center p-5 mt-30 cursor-pointer">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card
            imageSrc="https://content.jdmagicbox.com/comp/pune/y7/020pxx20.xx20.220309040732.g3y7/catalogue/rajlaxmi-super-market-karve-nagar-pune-grocery-stores-ilgq66g39c.jpg"
            title="Grocery Shop Management"
            description="Explore trends effortlessly with our digitized cloth shop—style, convenience, and curated fashion at your fingertips."
          />
          <Card
            imageSrc="https://lh3.googleusercontent.com/bcAHCJ72jH_AGbSrvd_it_VfiBwzk1eqI02F9Ou_wRC5-NllYQFDGkIQrpgtcp984Jg7lAiD6Y6nOfXrTZONfkypHLs=w600-rw"
            title="Shoes Shop Management"
            description="Step into the future of footwear with our digitized shoes shop—style, comfort, and endless choices."
          />
          <Card
            imageSrc="https://content.jdmagicbox.com/comp/nizamabad/u7/9999p8462.8462.180829170518.x4u7/catalogue/santosh-mobile-show-room-pitlam-nizamabad-mobile-phone-dealers-flrlbar0zt.jpg"
            title="Mobile Shop Management"
            description="Elevate your fitness journey with our digitized gym—innovation, motivation, and progress for a stronger you!"
          />
          <Card
            imageSrc="https://www.shoppingbazar.in/uploads/images/2f34cea0052de769c96521a576106d441509100517.jpg" 
             title="Clothes Shop Management"
            description="Revolutionize your dining experience with our digitalized food shop—convenience, variety, and flavors delivered to your doorstep!"
          />
          
          <Card
            imageSrc={madical}
            title="Madical Store Management"
            description="Elevate your special day with our digitized wedding decor shop—elegance, creativity, and unforgettable celebrations."
          />
          <Card
            imageSrc="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/49/e7/02/thyme-full-view.jpg?w=600&h=-1&s=1"
            title="Jewelry Shop Management"
            description="Adorn yourself uniquely with our digitized jewelry shop—elegance, craftsmanship, and timeless beauty for every moment."
          />
        </div>
      </div>
    </>
  );
};

export default Service;
