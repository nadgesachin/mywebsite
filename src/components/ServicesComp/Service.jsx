import React from "react";
import Card from "./Card"; // Adjust the path accordingly

const Service = () => {
  return (
    <>
      <h1 className="text-center font-semibold text-4xl mt-4">Website Template According to Your Bussiness</h1>
      <div className="flex justify-center p-5 mt-30 cursor-pointer">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Example of using the Service component */}
          <Card
            imageSrc="https://imgs.search.brave.com/b9-pUyNpIAl4yg5lT6GObQAOVGrT8GYomSpuWVLksLA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tb25z/dGVyc3Bvc3QuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE4/LzA5LzJfUXVpY2st/Rm9vZC1GYXN0LUZv/b2QtUmVzdGF1cmFu/dC1SZXNwb25zaXZl/LU11bHRpcGFnZS1X/ZWJzaXRlLVRlbXBs/YXRlLnBuZw"
            title="Food Shop"
            description="Revolutionize your dining experience with our digitalized food shop—convenience, variety, and flavors delivered to your doorstep!"
          />
          <Card
            imageSrc="https://imgs.search.brave.com/itDsFIfGu_D2rLY0MMRn6bPMZPSWKn9hE4qdt7VnvEk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzI2MjA5/NzEvc2NyZWVuc2hv/dHMvOTcwOTQ2Ny9t/ZWRpYS9jMmY1NTFk/NjIzY2ZmOWMyMzFk/MzBmOGMwMjcwMWNl/Mi5wbmc_cmVzaXpl/PTQwMHgzMDAmdmVy/dGljYWw9Y2VudGVy"
            title="Fitness Club"
            description="Elevate your fitness journey with our digitized gym—innovation, motivation, and progress for a stronger you!"
          />
          <Card
            imageSrc="https://imgs.search.brave.com/SaALoRJzNIDfUhLu4DwagdTrcC1vabf96Do4KthW0QU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9jZG4u/ZHJpYmJibGUuY29t/L3VzZXJzLzI0ODU0/MC9zY3JlZW5zaG90/cy8yODIyNDY4L21l/ZGlhL2FlYTcxMTgy/MDJkMjVmMTAyZjJj/NTEwNDY2MDk4MDc5/LnBuZz9yZXNpemU9/NDAweDMwMCZ2ZXJ0/aWNhbD1jZW50ZXI"
            title="Cloth New Style"
            description="Explore trends effortlessly with our digitized cloth shop—style, convenience, and curated fashion at your fingertips."
          />
          <Card
            imageSrc="https://imgs.search.brave.com/WCZ-dx3LjJRg75GUD_fy2CXW2wDziXG6Z8FfqpBRiuY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zLnRt/aW1nY2RuLmNvbS9z/Y3IvNDAweDI1MC83/MzcwMC9zaG9lcy1z/aG9wLW9ubGluZS1z/aG9waWZ5LXRoZW1l/XzczNzE5LTMtb3Jp/Z2luYWwucG5n"
            title="Shoes Shop"
            description="Step into the future of footwear with our digitized shoes shop—style, comfort, and endless choices."
          />
          <Card
            imageSrc="https://imgs.search.brave.com/0Secmm9Td7dmIBa9fli506dftWHk4YuaunA8ZvQsk6c/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMTUvV2Vk/ZGluZy1GbG9yYWwt/RGVjb3JhdGlvbi1Q/TkctUGhvdG9zLnBu/Zw"
            title="Wedding Decoration"
            description="Elevate your special day with our digitized wedding decor shop—elegance, creativity, and unforgettable celebrations."
          />
          <Card
            imageSrc="https://imgs.search.brave.com/TqMBVWivYX-7M9pEA67dg2w-l3rwgzzhb0wx2cnMBx8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zLnRt/aW1nY2RuLmNvbS9z/Y3IvNDAweDI1MC82/MDAwMC9qZXdlbHJ5/LWVjb21tZXJjZS1z/aG9waWZ5LXRoZW1l/XzYwMDU4LTMtb3Jp/Z2luYWwucG5n"
            title="Jewelry Shop"
            description="Adorn yourself uniquely with our digitized jewelry shop—elegance, craftsmanship, and timeless beauty for every moment."
          />
          {/* Add more Service components for other features */}
        </div>

        {/* Other components or content */}
      </div>
    </>
  );
};

export default Service;
