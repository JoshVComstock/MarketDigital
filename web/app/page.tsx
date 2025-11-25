"use client";

import { Section } from "lucide-react";
import { CustomCard } from "./components/ui/customCard";
import { Sidebar } from "./components/sidebar/Sidebar";

export default function Home() {
  return (
    <section className=" flex">
      <Sidebar />
      <article className=" flex-1 bg-stone-100 p-4">
        <section className="p-4 rounded-3xl bg-white">
          <p className="font-semibold text-xl pb-4 border-b border-gray-200">
            List Products
          </p>
          <div className="flex flex-wrap gap-2">
            <CustomCard
              img="https://i.pinimg.com/1200x/60/79/fb/6079fb994b3c202685bc422b7c32b5a0.jpg"
              title="Camiseta deportiva"
              category="Hombre"
              pints="10"
              variants={[
                { color: "#000000", size: "S", stock: 5 },
                { color: "#000000", size: "M", stock: 0 },

                { color: "#ff0000", size: "L", stock: 0 },
                { color: "brown", size: "XL", stock: 0 },

                { color: "violet", size: "XL", stock: 0 },
              ]}
              price={99}
              isNew={true}
              moneda="$"
            />
            <CustomCard
              img="https://i.pinimg.com/1200x/60/79/fb/6079fb994b3c202685bc422b7c32b5a0.jpg"
              title="Camiseta deportiva"
              category="Hombre"
              pints="10"
              variants={[
                { color: "#000000", size: "S", stock: 5 },
                { color: "#000000", size: "M", stock: 0 },

                { color: "#ff0000", size: "L", stock: 0 },
                { color: "brown", size: "XL", stock: 0 },

                { color: "violet", size: "XL", stock: 0 },
              ]}
              price={99}
              isNew={true}
              moneda="$"
            />{" "}
            <CustomCard
              img="https://i.pinimg.com/1200x/60/79/fb/6079fb994b3c202685bc422b7c32b5a0.jpg"
              title="Camiseta deportiva"
              category="Hombre"
              pints="10"
              variants={[
                { color: "#000000", size: "S", stock: 5 },
                { color: "#000000", size: "M", stock: 0 },

                { color: "#ff0000", size: "L", stock: 0 },
                { color: "brown", size: "XL", stock: 0 },

                { color: "violet", size: "XL", stock: 0 },
              ]}
              price={99}
              isNew={true}
              moneda="$"
            />{" "}
            <CustomCard
              img="https://i.pinimg.com/1200x/60/79/fb/6079fb994b3c202685bc422b7c32b5a0.jpg"
              title="Camiseta deportiva"
              category="Hombre"
              pints="10"
              variants={[
                { color: "#000000", size: "S", stock: 5 },
                { color: "#000000", size: "M", stock: 0 },

                { color: "#ff0000", size: "L", stock: 0 },
                { color: "brown", size: "XL", stock: 0 },

                { color: "violet", size: "XL", stock: 0 },
              ]}
              price={99}
              isNew={true}
              moneda="$"
            />{" "}
            <CustomCard
              img="https://i.pinimg.com/1200x/60/79/fb/6079fb994b3c202685bc422b7c32b5a0.jpg"
              title="Camiseta deportiva"
              category="Hombre"
              pints="10"
              variants={[
                { color: "#000000", size: "S", stock: 5 },
                { color: "#000000", size: "M", stock: 0 },

                { color: "#ff0000", size: "L", stock: 0 },
                { color: "brown", size: "XL", stock: 0 },

                { color: "violet", size: "XL", stock: 0 },
              ]}
              price={99}
              isNew={true}
              moneda="$"
            />{" "}
            <CustomCard
              img="https://i.pinimg.com/1200x/60/79/fb/6079fb994b3c202685bc422b7c32b5a0.jpg"
              title="Camiseta deportiva"
              category="Hombre"
              pints="10"
              variants={[
                { color: "#000000", size: "S", stock: 5 },
                { color: "#000000", size: "M", stock: 0 },

                { color: "#ff0000", size: "L", stock: 0 },
                { color: "brown", size: "XL", stock: 0 },

                { color: "violet", size: "XL", stock: 0 },
              ]}
              price={99}
              isNew={true}
              moneda="$"
            />{" "}
            <CustomCard
              img="https://i.pinimg.com/1200x/60/79/fb/6079fb994b3c202685bc422b7c32b5a0.jpg"
              title="Camiseta deportiva"
              category="Hombre"
              pints="10"
              variants={[
                { color: "#000000", size: "S", stock: 5 },
                { color: "#000000", size: "M", stock: 0 },

                { color: "#ff0000", size: "L", stock: 0 },
                { color: "brown", size: "XL", stock: 0 },

                { color: "violet", size: "XL", stock: 0 },
              ]}
              price={99}
              isNew={true}
              moneda="$"
            />
          </div>
        </section>
      </article>
    </section>
  );
}
