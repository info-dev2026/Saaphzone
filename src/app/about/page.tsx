"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Target, 
  Eye, 
  Heart, 
  Lightbulb, 
  Leaf, 
  Users, 
  Award, 
  Scale, 
  ArrowRight
} from "lucide-react";

// Animation configs
const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const coreValues = [
  {
    title: "Integrity",
    desc: "Integrity is the same integrity and professional services.",
    icon: Heart
  },
  {
    title: "Innovation",
    desc: "Innovation is immersive innovations to trust-fitting innovation.",
    icon: Lightbulb
  },
  {
    title: "Sustainability",
    desc: "Generation embedded in sustainability, and sustainability.",
    icon: Leaf
  },
  {
    title: "Collaboration",
    desc: "Collaboration of community and empowerment adaptability.",
    icon: Users
  },
  {
    title: "Excellence",
    desc: "Excellence in accessibility and construction and excellence.",
    icon: Award
  },
  {
    title: "Compliance",
    desc: "Compliance and assistance and compliance compliance.",
    icon: Scale
  }
];

const milestones = [
  {
    year: "2018",
    title: "Founded",
    desc: "Founded in 2018 in smart-solutions."
  },
  {
    year: "2021",
    title: "Growth phase",
    desc: "Established as a leader in technical innovation."
  },
  {
    year: "2022",
    title: "Advanced Solutions",
    desc: "Advanced solutions, growth and investment missions."
  },
  {
    year: "2024",
    title: "Expansion",
    desc: "Exceeded business saaphzone technologies benchmarks."
  }
];

export default function AboutPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let animationFrameId: number;

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);

    const gl = (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")) as WebGLRenderingContext | null;
    if (!gl) {
      console.warn("WebGL not supported");
      return;
    }

    const vsSource = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;
      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fsSource = `
      precision highp float;
      uniform float u_time;
      uniform vec2 u_resolution;
      varying vec2 v_texCoord;
      
      void main() {
          vec2 uv = v_texCoord;
          vec3 color1 = vec3(0.114, 0.365, 0.608); // #1D5D9B
          vec3 color2 = vec3(0.976, 0.976, 1.0);   // #f9f9ff
          
          float noise = sin(uv.x * 10.0 + u_time) * cos(uv.y * 10.0 - u_time) * 0.5 + 0.5;
          vec3 color = mix(color1, color2, noise * 0.2 + 0.8);
          
          gl_FragColor = vec4(color, 1.0);
      }
    `;

    const createShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error("Shader compile error:", gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vs = createShader(gl.VERTEX_SHADER, vsSource);
    const fs = createShader(gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error("Program link error:", gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
      gl.STATIC_DRAW
    );

    const positionLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const timeLocation = gl.getUniformLocation(program, "u_time");
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");

    const render = (time: number) => {
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.uniform1f(timeLocation, time * 0.001);
      gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <header className="relative pt-40 pb-24 min-h-[716px] flex flex-col items-center justify-center text-center bg-gray-50/50">
        <canvas 
          ref={canvasRef} 
          className="absolute inset-0 w-full h-full -z-10 opacity-40" 
        />
        <div className="px-6 max-w-4xl mx-auto relative z-10">
          <motion.span 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 rounded-full bg-blue-100/80 text-[#1D5D9B] font-semibold text-sm mb-6"
          >
            About Us
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-headline-xl text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-gray-900"
          >
            Driven by Purpose,<br/>Powered by Innovation
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link 
              href="/contact" 
              className="inline-block bg-[#1D5D9B] text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-lg transition-all transform hover:-translate-y-1"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </header>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#1D5D9B]">Our Story</h2>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>Saaphzone Technologies was founded in 2018. We created innovative solutions and established a consistent community profile and vision for growth and innovation and creators connecting business.</p>
              <p>Saaphzone Technologies focused on transforming technology complexities and scale within many emerging catalysts and enriching the engine of real-time growth and creative orientation.</p>
              <p>We love Saaphzone Technologies for our results, easier purpose in raising the entry and embrace of our proposed real smart business.</p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Mission Card */}
            <div className="p-8 rounded-xl bg-[#f9f9ff] border border-gray-200/50 flex gap-6 items-start shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center text-[#1D5D9B] shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed text-base">We aim to empower every enterprise by providing modern technologies to communicate with the novel-fit innovation.</p>
              </div>
            </div>
            {/* Vision Card */}
            <div className="p-8 rounded-xl bg-green-50/50 border border-green-200/50 flex gap-6 items-start shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-green-100 flex items-center justify-center text-green-700 shrink-0">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed text-base">We now present our vision and visionary developments communicating enchantment goals.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-[#f9f9ff]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Core Values</h2>
          </div>
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  className="p-8 border border-gray-200/60 bg-white rounded-xl text-center hover:border-[#1D5D9B]/40 transition-all hover:shadow-lg group"
                >
                  <div className="w-14 h-14 mx-auto mb-6 rounded-full bg-blue-50 flex items-center justify-center text-[#1D5D9B] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold mb-3 text-gray-900">{val.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{val.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-gray-500 italic">Building solutions for business and innovation.</p>
          </div>
          <div className="relative max-w-3xl mx-auto space-y-16 before:content-[''] before:absolute before:left-1/2 before:top-0 before:bottom-0 before:w-[2px] before:bg-blue-100 before:-translate-x-1/2">
            {milestones.map((m, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="flex items-center gap-12 group"
              >
                <div className="w-1/2 text-right">
                  <span className="text-2xl font-bold text-gray-400 group-hover:text-[#1D5D9B] transition-all">{m.year}</span>
                </div>
                <div className="w-4 h-4 rounded-full bg-[#1D5D9B] ring-8 ring-blue-100 z-10 shrink-0"></div>
                <div className="w-1/2">
                  <h4 className="text-xl font-bold mb-1 text-gray-900">{m.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Partner with Saaphzone Technologies</h2>
          <p className="text-gray-600 text-lg mb-10 max-w-2xl mx-auto">Partner with Saaphzone Technologies to experience and company and current technological solutions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-[#1D5D9B] text-white px-10 py-3.5 rounded-full font-semibold hover:opacity-90 transition-all text-center"
            >
              Get in Touch
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-[#1D5D9B] text-[#1D5D9B] px-10 py-3.5 rounded-full font-semibold hover:bg-blue-50/10 transition-all text-center"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
