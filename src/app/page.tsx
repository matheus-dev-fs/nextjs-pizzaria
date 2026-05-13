import { PizzaList } from "@/components/home/pizza-list.component";
import { Header } from "@/components/layout/header";
import { api } from "@/lib/api";
import { PizzasResponse } from "@/types/pizzas-response.type";

const Page = async () => {
    const response = await api.get<PizzasResponse>("/pizzas");
    const data: PizzasResponse = response.data;

    return (
        <div>
            <Header />
            <main className="container mx-auto mb-10">
                <PizzaList pizzas={data} />
            </main>
        </div>
    );
};

export default Page;