import { certificates } from "../data/projects";

export default function CertificatesSection() {
  return (
    <>
      <section id="certificates" className="pb-10  max-w-[80vw] mx-auto px-4">
        <div class="max-w-[80vw] mx-auto bg-foreground h-[1px] mb-7"></div>

        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground text-balance">
            Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and bootcamps I've Compeleted
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <div key={certificate.id} className="cursor-pointer">
              <CertificateCard certificate={certificate} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function CertificateCard({ certificate }) {
  return (
    <div className="group border border-border overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
      {/* Image Container */}
      <div className="relative h-64 md:h-80 bg-muted overflow-hidden">
        <img
          src={
            certificate.image ||
            "/placeholder.svg?height=320&width=400&query=certificate"
          }
          alt={certificate.title}
          className="w-full h-full object-cover hover:scale-125 transition-transform duration-300"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <p className="text-sm text-white/80">{certificate.issueDate}</p>
        </div>
      </div>

      {/* Card Footer - Outside Image */}
      <div className="p-4 border-t border-border">
        {/* Title */}
        <h3 className="text-lg font-bold text-foreground mb-3 text-balance line-clamp-2">
          {certificate.title}
        </h3>

        {/* Issued By */}
        <div className="mb-4 flex gap-3">
          <p className="text-sm text-muted-foreground mb-1">Issued by</p>
          <a
            href={certificate.issuedByLink}
            className="text-primary hover:underline font-bold underline text-sm"
          >
            {certificate.issuedBy}
          </a>
        </div>

        {/* Download Button */}
        <a
          href={certificate.downloadLink}
          download
          className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-foreground bg-foreground text-background hover:text-foreground animated-fill-opp  text-sm font-medium"
        >
          <i className="fas fa-download text-xs"></i>
          Download
        </a>
      </div>
    </div>
  );
}
