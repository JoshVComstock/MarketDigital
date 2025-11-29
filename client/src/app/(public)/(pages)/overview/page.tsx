import MainCard from "@/components/card/MainCard";
import Wrapper from "@/components/wrapper/wrapper";
import React from "react";

const OverviewPage = () => {
  return (
    <Wrapper title="Overview" type="MAIN" contentType="ROW">
      <Wrapper type="SECTION" title="Filtros" maxWhidh={300} hiddenMedia="XL">
        Filtros
      </Wrapper>
      <Wrapper title="Overview" type="MAIN-CONTENT">
        <article className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3  2xl:grid-cols-4  gap-4 ">
          <MainCard
            img="https://www.lolitamoda.com/uploads/post/image/79/41.prendas_esenciales_que_todo_hombre_necesita_en_invierno.jpg"
            title="Camisa de tela"
            category="Camisas"
            pints={4.2}
            price={100}
            isNew={true}
            moneda="$"
            variants={[
              {
                color: "#F54927",
                size: "S",
                stock: 10,
              },
              {
                color: "#614520",
                size: "M",
                stock: 10,
              },
              {
                color: "#202F61",
                size: "L",
                stock: 10,
              },
              {
                color: "#711F8F",
                size: "XL",
                stock: 10,
              },
            ]}
          />
          <MainCard
            img="https://images.pexels.com/photos/842811/pexels-photo-842811.jpeg"
            title="Camisa de tela"
            category="Camisas"
            pints={4.2}
            price={100}
            isNew={true}
            moneda="$"
            variants={[
              {
                color: "#202F61",
                size: "L",
                stock: 10,
              },
              {
                color: "#711F8F",
                size: "XL",
                stock: 10,
              },
            ]}
          />
          {/* 
        <MainCard
          img="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg"
          title="Camisa de tela"
          category="Camisas"
          pints={4.2}
          price={100}
          isNew={false}
          moneda="$"
          variants={[
            {
              color: "#000",
              size: "S",
              stock: 10,
            },

            {
              color: "#fff",
              size: "XL",
              stock: 10,
            },
          ]}
        />{" "}
        <MainCard
          img="https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg"
          title="Camisa de tela"
          category="Camisas"
          pints={4.2}
          price={100}
          isNew={true}
          moneda="$"
          variants={[
            {
              color: "#666A86",
              size: "XL",
              stock: 1,
            },
            {
              color: "#788AA3",
              size: "XL",
              stock: 1,
            },
            {
              color: "#92B6B1",
              size: "XL",
              stock: 1,
            },
          ]}
        />{" "}
        <MainCard
          img="https://images.pexels.com/photos/1306248/pexels-photo-1306248.jpeg"
          title="Camisa de tela"
          category="Camisas"
          pints={4.2}
          price={100}
          isNew={true}
          moneda="$"
          variants={[
            {
              color: "#92B6B1",
              size: "S",
              stock: 10,
            },
            {
              color: "#C6AC8F",
              size: "M",
              stock: 10,
            },
          ]}
        />{" "}
        <MainCard
          img="https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg"
          title="Camisa de tela"
          category="Camisas"
          pints={4.2}
          price={100}
          isNew={false}
          moneda="$"
          variants={[
            {
              color: "#F54927",
              size: "S",
              stock: 10,
            },
            {
              color: "#614520",
              size: "M",
              stock: 10,
            },
            {
              color: "#202F61",
              size: "L",
              stock: 10,
            },
            {
              color: "#711F8F",
              size: "XL",
              stock: 10,
            },
          ]}
        />{" "}
        <MainCard
          img="https://images.pexels.com/photos/1760900/pexels-photo-1760900.jpeg"
          title="Camisa de tela"
          category="Camisas"
          pints={4.2}
          price={100}
          isNew={true}
          moneda="$"
          variants={[
            {
              color: "#F54927",
              size: "S",
              stock: 10,
            },
            {
              color: "#614520",
              size: "M",
              stock: 10,
            },
            {
              color: "#202F61",
              size: "L",
              stock: 10,
            },
            {
              color: "#711F8F",
              size: "XL",
              stock: 10,
            },
          ]}
        /> */}
        </article>
      </Wrapper>
    </Wrapper>
  );
};

export default OverviewPage;
