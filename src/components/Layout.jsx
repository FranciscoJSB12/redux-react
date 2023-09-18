export const Layout = ({children}) => {
    return (
        <main className='min-h-screen flex flex-col items-center py-14 px-[10%] bg-gray-800'>
            {children}
        </main>
    )
}