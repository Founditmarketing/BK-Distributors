import { motion } from 'motion/react';
import { PageHero } from '../components/PageHero';

export function AboutPage() {
  return (
    <>
      <PageHero label="Our Story" title="25 Years of Making Things That Matter" />

      <section className="section-padding bg-offwhite text-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8">
              <p className="sans-ui text-lg leading-relaxed text-dark/70">
                BK Distributors started in 2000 with a simple idea: Central Louisiana deserved
                a local shop that treated every order — big or small — with the same level of
                care and craftsmanship. Over two decades later, that idea is still what drives
                every project we take on.
              </p>
              <p className="sans-ui text-lg leading-relaxed text-dark/70">
                We're not a big-box print shop. We're your neighbors. We know the coaches,
                the school principals, the business owners, the campaign managers. When you
                walk in, you're not a ticket number — you're someone we want to make proud.
              </p>
              <p className="sans-ui text-lg leading-relaxed text-dark/70">
                From championship rings to fleet vehicle wraps, from single plaques to
                thousand-piece trophy orders — we've handled it all, and we've done it right
                here in Pineville.
              </p>
            </div>

            <motion.div
              initial={{ x: 80, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 border border-gold/20 -z-10 translate-x-4 translate-y-4" />
              <img
                src="https://bkdistrib.com/wp-content/uploads/2021/09/164213364_3903854986346120_4992345823404423411_n.jpg"
                alt="BK Distributors shop interior"
                className="w-full aspect-[4/5] object-cover shadow-2xl border-4 border-white"
              />
            </motion.div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-12 border-t border-dark/10 pt-20">
            {[
              { label: 'Est. 2000', title: 'Locally Rooted', body: 'Born and built in Pineville, Louisiana. We reinvest in the community that supports us.' },
              { label: 'Every Project', title: 'No Order Too Small', body: 'Whether it\'s one trophy or a full fleet wrap, you get our best work every time.' },
              { label: 'Our Promise', title: 'Fast & Reliable', body: 'We know deadlines matter. We communicate clearly and deliver when we say we will.' },
            ].map((v, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="space-y-4"
              >
                <span className="mono-label text-terracotta">{v.label}</span>
                <h3 className="serif-heavy text-2xl text-dark">{v.title}</h3>
                <p className="sans-ui text-dark/60 leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
