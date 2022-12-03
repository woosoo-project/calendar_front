import { getProviders, signIn } from 'next-auth/react';

type ProviderNameType = 'google' | 'naver' | 'kakao"';
type ProviderType = {
    providers: Record<
        ProviderNameType,
        {
            id: string;
            name: string;
            type: string;
            signinUrl: string;
            callbackUrl: string;
        }
    >;
};

export default function SignIn({ providers }: ProviderType) {
    return (
        <>
            {Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button type="button" onClick={() => signIn(provider.id)}>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
        </>
    );
}

export async function getServerSideProps() {
    const providers = await getProviders();

    return {
        props: { providers }
    };
}
