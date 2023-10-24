export default function Pagination(props) {
    const {onPreviousClick, currentPage, onNextClick} = props;
    return (
        <nav className="border-t-neutral-400 border-t" aria-label="Images galery navigation">
            <ul className="list-style-none flex justify-center p-5">
                <li>
                    <a
                        className={`${currentPage <= 1 && 'pointer-events-none'} relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white`}
                        onClick={onPreviousClick}
                    >
                        Previous
                    </a>
                </li>
                <li>
                    <a className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white">
                        {currentPage}
                    </a>
                </li>
                <li>
                    <a
                        className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
                        onClick={onNextClick}
                    >
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    )
}
