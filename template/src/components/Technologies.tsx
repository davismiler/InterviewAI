import React from 'react';
import { motion } from 'framer-motion';

const techGroups = [
  {
    label: 'Languages',
    items: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', docs: 'https://developer.mozilla.org/docs/Web/JavaScript' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', docs: 'https://www.typescriptlang.org/docs/' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', docs: 'https://docs.python.org/3/' },
      { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', docs: 'https://docs.oracle.com/en/java/' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', docs: 'https://isocpp.org/std/the-standard' },
      { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg', docs: 'https://docs.microsoft.com/en-us/dotnet/csharp/' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', docs: 'https://developer.mozilla.org/docs/Web/HTML' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', docs: 'https://developer.mozilla.org/docs/Web/CSS' },
    ],
  },
  {
    label: 'Frontend',
    items: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', docs: 'https://react.dev/' },
      { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', docs: 'https://nextjs.org/docs' },
      { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', docs: 'https://angular.io/docs' },
      { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg', docs: 'https://tailwindcss.com/docs' },
      { name: 'Redux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg', docs: 'https://redux.js.org/' },
      { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg', docs: 'https://getbootstrap.com/' },
      { name: 'Material UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg', docs: 'https://mui.com/' },
      { name: 'jQuery', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg', docs: 'https://api.jquery.com/' },
    ],
  },
  {
    label: 'Backend',
    items: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', docs: 'https://nodejs.org/en/docs' },
      { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', docs: 'https://expressjs.com/' },
      { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', docs: 'https://docs.djangoproject.com/' },
      { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg', docs: 'https://www.tensorflow.org/learn' },
      { name: 'FastAPI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg', docs: 'https://fastapi.tiangolo.com/' },
      { name: 'GraphQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg', docs: 'https://graphql.org/learn/' },
      { name: 'REST', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/api/api-original-wordmark.svg', docs: 'https://restfulapi.net/' },
      { name: 'Supabase', icon: 'https://avatars.githubusercontent.com/u/54469796?s=200&v=4', docs: 'https://supabase.com/docs' },
    ],
  },
  {
    label: 'Database',
    items: [
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', docs: 'https://www.mongodb.com/docs/' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', docs: 'https://www.postgresql.org/docs/' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', docs: 'https://dev.mysql.com/doc/' },
      { name: 'SQLite', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg', docs: 'https://www.sqlite.org/docs.html' },
      { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', docs: 'https://redis.io/docs/' },
      { name: 'Supabase', icon: 'https://avatars.githubusercontent.com/u/54469796?s=200&v=4', docs: 'https://supabase.com/docs' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', docs: 'https://firebase.google.com/docs' },
    ],
  },
  {
    label: 'DevOps & Cloud',
    items: [
      { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', docs: 'https://docs.docker.com/' },
      { name: 'AWS', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg', docs: 'https://docs.aws.amazon.com/' },
      { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', docs: 'https://docs.microsoft.com/en-us/azure/' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', docs: 'https://git-scm.com/doc' },
      { name: 'Vercel', icon: 'https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png', docs: 'https://vercel.com/docs' },
      { name: 'Netlify', icon: 'https://www.netlify.com/v3/img/components/logomark.png', docs: 'https://docs.netlify.com/' },
      { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', docs: 'https://www.jenkins.io/doc/' },
      { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg', docs: 'https://www.kernel.org/doc/html/latest/' },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 50,
    },
  },
};

const Technologies = () => {
  const [imageErrors, setImageErrors] = React.useState<Record<string, boolean>>({});

  const handleImageError = (techName: string) => {
    setImageErrors(prev => ({ ...prev, [techName]: true }));
  };

  return (
    <section id="technologies" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="section-title">
          Technologies I Work With
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Cutting-edge tools and frameworks for building the future
        </p>
      </motion.div>
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-16 gap-x-12">
        {techGroups.map((group) => (
          <div key={group.label} className="flex flex-col items-center h-full">
            <h3 className="text-xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
              {group.label}
            </h3>
            <motion.div
              className="grid grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {group.items.map((tech) => (
                <motion.a
                  key={tech.name}
                  href={tech.docs}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center group no-underline"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.08,
                    rotateY: 5,
                    transition: { type: "spring", stiffness: 300 }
                  }}
                  whileTap={{ scale: 0.96 }}
                >
                  <div className="relative p-2 rounded-xl bg-black/40 backdrop-blur-sm border border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.08)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-300 w-16 h-16 flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-blue-600/20 to-purple-600/0 rounded-xl blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-150 group-hover:scale-100"></div>
                    {!imageErrors[tech.name] ? (
                      <motion.img 
                        src={tech.icon} 
                        alt={tech.name} 
                        className="w-10 h-10 object-contain relative z-10 filter drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 400 }}
                        onError={() => handleImageError(tech.name)}
                      />
                    ) : (
                      <div className="w-10 h-10 flex items-center justify-center border-2 border-blue-500/40 rounded-lg bg-black/30 text-blue-400 font-bold text-lg z-10 filter drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-all duration-300">
                        {tech.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <motion.span 
                    className="mt-1 text-xs text-gray-400 group-hover:text-blue-400 transition-colors duration-300 text-center"
                    whileHover={{ scale: 1.05 }}
                  >
                    {tech.name}
                  </motion.span>
                </motion.a>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
