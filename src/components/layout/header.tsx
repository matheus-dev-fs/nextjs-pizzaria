import Link from "next/link";
import { CartButton } from "../cart/cart-button.component";
import { LoginAreaButton } from "../login-area/login-area-button.component";
import { cookies } from "next/headers";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export const Header: React.FC = async () => {
    const cookieStore: ReadonlyRequestCookies = await cookies();
    const accessToken: string | undefined = cookieStore.get("access_token")?.value;

    return (
        <header className="container mx-auto flex my-4 p-5 items-center justify-between bg-secondary rounded-md">
            <Link href="/">
                <div className="text-2xl font-bold">Pizzaria</div>
            </Link>
            <div className="flex gap-2">
                <LoginAreaButton initialState={!!accessToken} />
                <CartButton />
            </div>
        </header>
    );
};