import Link from 'next/link'

export function BlogPosts() {
  

  return (
    <div>
      <Link
        className="flex flex-col space-y-1 mb-4"
        href={`https://medium.com/codeburst/javascript-promises-in-5-concepts-8df5d5818666`}
      >
        <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
          <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
            {`Jun 28, 2020`}
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            {`JavaScript Promises in 5 Concepts`}
          </p>
        </div>
      </Link>
      <Link
        className="flex flex-col space-y-1 mb-4"
        href={`https://medium.com/codeburst/understanding-angular-guards-347b452e1892`}
      >
        <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
          <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
            {`Dec 1, 2019`}
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            {`Understanding Angular Guards`}
          </p>
        </div>
      </Link>
      <Link
        className="flex flex-col space-y-1 mb-4"
        href={`https://medium.com/@ps0779691/debugging-in-javascript-ec1c344331d6`}
      >
        <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
          <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
            {`Jul 2, 2017`}
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            {`Debugging in Javascript`}
          </p>
        </div>
      </Link>
    </div>
  )
}
