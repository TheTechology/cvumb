function $(s){ return document.querySelector(s); }
function $all(s){ return Array.from(document.querySelectorAll(s)); }

function setYear(){
  const el = $("#year");
  if(el) el.textContent = String(new Date().getFullYear());
}

function toast(msg){
  const t = document.createElement("div");
  t.textContent = msg;
  t.style.position = "fixed";
  t.style.right = "16px";
  t.style.bottom = "16px";
  t.style.padding = "10px 12px";
  t.style.border = "1px solid #e5e7eb";
  t.style.background = "rgba(255,255,255,.95)";
  t.style.backdropFilter = "blur(10px)";
  t.style.borderRadius = "14px";
  t.style.boxShadow = "0 12px 30px rgba(11,18,32,.12)";
  t.style.fontWeight = "700";
  t.style.zIndex = 9999;
  document.body.appendChild(t);
  setTimeout(()=>{ t.remove(); }, 2400);
}

function initReveal(){
  const items = $all(".reveal");
  if(!items.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if(reduceMotion){
    items.forEach((el)=>el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting){
        entry.target.classList.add("is-visible");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  items.forEach((el)=>io.observe(el));
}

function initFilters(){
  const buttons = $all(".filter-btn");
  const cards = $all("#portfolioGrid .case");
  if(!buttons.length || !cards.length) return;

  buttons.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
      const filter = btn.dataset.filter || "all";

      buttons.forEach((b)=>b.classList.remove("is-active"));
      btn.classList.add("is-active");

      cards.forEach((card)=>{
        const categories = (card.dataset.category || "").split(/\s+/).filter(Boolean);
        const show = filter === "all" || categories.includes(filter);
        card.style.display = show ? "flex" : "none";
      });
    });
  });
}

async function exportPdf(){
  const target = $("#pdfResume");
  const btn = $("#btnPdf");
  if(!target || !btn) return;

  const old = btn.textContent;
  btn.disabled = true;
  btn.textContent = "Generez PDF...";

  const prev = {
    display: target.style.display,
    position: target.style.position,
    left: target.style.left,
    top: target.style.top,
    width: target.style.width,
    zIndex: target.style.zIndex
  };

  try{
    const now = new Date();
    const generatedAtEl = $("#pdfGeneratedAt");
    if(generatedAtEl){
      const date = now.toLocaleDateString("ro-RO");
      const time = now.toLocaleTimeString("ro-RO", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
      generatedAtEl.textContent = `${date}, ${time}`;
    }

    target.style.display = "block";
    target.style.position = "fixed";
    target.style.left = "-10000px";
    target.style.top = "0";
    target.style.width = "820px";
    target.style.zIndex = "-1";

    const canvas = await html2canvas(target, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff"
    });

    const imgData = canvas.toDataURL("image/png");
    const { jsPDF } = window.jspdf;

    const pdf = new jsPDF("p", "pt", "a4");
    const pageW = pdf.internal.pageSize.getWidth();
    const pageH = pdf.internal.pageSize.getHeight();
    const margin = 34;
    const usableW = pageW - margin * 2;
    const usableH = pageH - margin * 2;
    const scale = Math.min(usableW / canvas.width, usableH / canvas.height);
    const imgW = canvas.width * scale;
    const imgH = canvas.height * scale;
    const x = margin + (usableW - imgW) / 2;
    const y = margin + (usableH - imgH) / 2;

    // Single-page HR PDF: fit all relevant info on one A4 page.
    pdf.addImage(imgData, "PNG", x, y, imgW, imgH);

    pdf.save("Marian-Dumitru-CV-IT-Project-Digital-Ops.pdf");
    toast("CV PDF descarcat");
  }catch(e){
    console.error(e);
    toast("Nu am putut genera PDF. Folosesc Print...");
    window.print();
  }finally{
    target.style.display = prev.display;
    target.style.position = prev.position;
    target.style.left = prev.left;
    target.style.top = prev.top;
    target.style.width = prev.width;
    target.style.zIndex = prev.zIndex;

    btn.disabled = false;
    btn.textContent = old;
  }
}

document.addEventListener("DOMContentLoaded", ()=>{
  setYear();
  initReveal();
  initFilters();

  const btn = $("#btnPdf");
  if(btn) btn.addEventListener("click", exportPdf);
});
