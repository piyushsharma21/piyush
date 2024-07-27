import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`As a Software Engineer with a passion for creating performant web and mobile applications, I bring a wealth of experience and expertise in a range of cutting-edge technologies to the table. With a deep understanding of React, React Native, Redux, Angular, Ionic, Cordova, NodeJS, Firebase, AWS, Azure, JavaScript, TypeScript, HTML, CSS, and SCSS, I am dedicated to crafting beautiful and seamless user experiences that exceed expectations.`}
      </p>
      <p className="mb-4">

        {`With a background in developing scalable and high-performing applications, I excel at optimizing code and leveraging the latest tools and technologies to deliver outstanding results. Whether working independently or leading a team, I am committed to delivering robust and reliable solutions that meet the needs of users and stakeholders alike.`}
      </p>
      <p className="mb-4">
        {`In addition to my core skillset, I also have a working knowledge of ElasticSearch, ExpressJS, and Android & iOS development. This broad range of expertise allows me to deliver end-to-end solutions that meet the needs of clients across a variety of industries and use cases.`}
      </p>
      <p className="mb-4">
        {`If you're looking for a skilled and motivated Engineer who can help you take your web and mobile applications to the next level, please don't hesitate to get in touch. Let's build something great together!`}
      </p>

      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
