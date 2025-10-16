/********************************************************************************
 * JAVASCRIPT - PAINEL DO CONCURSO LEITEIRO (ADAPTADO)
 ********************************************************************************/

//================================================================================
// CONFIGURAÇÕES GLOBAIS E ESTADO DA APLICAÇÃO
//================================================================================

/**
 * @const {Array<number|string>} CATS - Define as categorias do concurso.
 */
const CATS = [30, 40, 'Livre'];

/**
 * @const {object[]} SESSOES - Define os nomes de cada uma das 5 ordenhas.
 */
const SESSOES = [
    { id: 0, label: "Dia 1 – Manhã (07h / 06h)" },
    { id: 1, label: "Dia 1 – Tarde (14h)" },
    { id: 2, label: "Dia 1 – Noite (19h / 22h)" },
    { id: 3, label: "Dia 2 – Manhã (07h / 06h)" },
    { id: 4, label: "Dia 2 – Tarde (14h)" },
    { id: 5, label: "Dia 2 – Noite (19h / 22h)" },
    { id: 6, label: "Dia 3 – Manhã (07h / 06h)" },
    { id: 7, label: "Dia 3 – Tarde (14h)" },
    { id: 8, label: "Dia 3 – Noite (19h / 22h)" },
];


/**
 * @let {number} ORDENHA_ATUAL - Variável de estado principal. Controla qual ordenha está sendo exibida.
 */
let ORDENHA_ATUAL = 0;
/**
 * @const {object[]} DATA - A "base de dados" do concurso.
 * IMPORTANTE: O array 'producao' de cada animal deve conter 5 valores.
 */

  const DATA = [
    // Exemplo: Preencha com os dados reais do novo concurso
    { id: "01", nome: "Vaca A", categoria: 40, produtor: "Produtor 1", producao: [20.000, 20.000, 20.000, 20.000, 20.000,20.000], baia: "Baia: 01", classificada: true },

    { id: "02", nome: "Vaca B (Livre)", categoria: 'Livre', produtor: "Produtor 2", producao: [21.580, 20.270, 20.340, 28.060, 22.820, 22.610, 23.000, 24.000, 25.000], baia: "Baia: 02", classificada: true },

    { id: "03", nome: "Vaca C", categoria: 30, produtor: "Produtor 3", producao: [13.530, 13.380, 14.360, 15.030, 15.690, 16.560], baia: "Baia: 03", classificada: true },

    { id: "04", nome: "Vaca D", categoria: 40, produtor: "Produtor 4", producao: [20.000, 20.000, 20.000, 20.000, 21.000, 19.000], baia: "Baia: 04", classificada: true },

    { id: "05", nome: "Vaca E (Livre)", categoria: 'Livre', produtor: "Produtor 5", producao: [20.480, 21.270, 20.350, 28.060, 22.820, 22.620, 23.000, 24.000, 25.100], baia: "Baia: 05", classificada: true },

    { id: "06", nome: "Vaca F", categoria: 30, produtor: "Produtor 6", producao: [16.530, 13.380, 14.360, 15.030, 15.690, 16.560], baia: "Baia: 06", classificada: true },

    { id: "07", nome: "Vaca G", categoria: 40, produtor: "Produtor 7", producao: [21.050, 19.130, 19.580, 19.600, 20.660, 19.900], baia: "Baia: 07", classificada: true },

    { id: "08", nome: "Vaca H (Livre)", categoria: 'Livre', produtor: "Produtor 8", producao: [21.480, 20.270, 21.350, 28.060, 22.820, 22.610, 23.010, 24.000, 25.000], baia: "Baia: 08", classificada: true },

    { id: "09", nome: "Vaca I", categoria: 30, produtor: "Produtor 9", producao: [15.000, 15.000,15.000,15.000,15.000,15.000], baia: "Baia: 09", classificada: true },

    { id: "10", nome: "Vaca J", categoria: 30, produtor: "Produtor 10", producao: [13.530, 13.580, 14.360, 15.030, 15.690, 16.560], baia: "Baia: 10", classificada: true },

    { id: "11", nome: "Vaca L", categoria: 30, produtor: "Produtor 11", producao: [13.630, 13.380, 14.360, 15.030, 15.690, 16.560], baia: "Baia: 11", classificada: true },

    { id: "12", nome: "Vaca M", categoria: 30, produtor: "Produtor 12", producao: [15.530, 13.480, 14.360, 15.030, 15.690, 16.560], baia: "Baia: 12", classificada: true },

    { id: "13", nome: "Vaca N", categoria: 40, produtor: "Produtor 13", producao: [22.050, 19.130, 19.580, 19.600, 20.660, 19.900], baia: "Baia: 13", classificada: true },

    { id: "14", nome: "Vaca O", categoria: 40, produtor: "Produtor 14", producao: [21.050, 19.130, 19.580, 20.600, 20.660, 19.900], baia: "Baia: 14", classificada: true },

    { id: "15", nome: "Vaca P", categoria: 40, produtor: "Produtor 15", producao: [21.050, 19.130, 19.780, 19.600, 20.660, 19.900], baia: "Baia: 15", classificada: true },

    { id: "16", nome: "Vaca Q (Livre)", categoria: 'Livre', produtor: "Produtor 16", producao: [20.480, 20.270, 20.350, 29.060, 22.820, 22.610, 23.000, 24.100, 25.000], baia: "Baia: 16", classificada: true },

    { id: "17", nome: "Vaca R (Livre)", categoria: 'Livre', produtor: "Produtor 17", producao: [20.480, 20.270, 20.350, 28.060, 23.820, 22.610, 23.000, 24.000, 25.010], baia: "Baia: 17", classificada: true },

    { id: "18", nome: "Vaca S (Livre)", categoria: 'Livre', produtor: "Produtor 18", producao: [20.480, 20.270, 20.350, 28.060, 22.820, 23.610, 23.000, 24.000, 24.200], baia: "Baia: 18", classificada: true },
    
    // ... continue preenchendo com os dados
];

/**
 * @let {number} maxOrdenhaDisponivel - Calcula e armazena qual a última ordenha com dados.
 */
let maxOrdenhaDisponivel = -1;
if (DATA.length > 0 && DATA[0].producao) {
    // Encontra o maior comprimento de array de produção para definir o limite
    maxOrdenhaDisponivel = DATA.reduce((max, animal) => Math.max(max, animal.producao.length), 0) - 1;
}

//================================================================================
// FUNÇÕES DE CÁLCULO E LÓGICA DE NEGÓCIO
//================================================================================

/**
 * Atualiza o estilo dos botões de ordenha para refletir o estado atual e a disponibilidade de dados.
 */
function updateOrdenhaButtons() {
    document.querySelectorAll('.ordenha-btn').forEach(btn => {
        const ordenhaIdx = parseInt(btn.dataset.ordenha);
        btn.classList.toggle('ready', ordenhaIdx <= maxOrdenhaDisponivel);
        btn.classList.toggle('active', ordenhaIdx === ORDENHA_ATUAL);
    });
}
/*
Formata um nome de categoria para exibição.
*/
function formatCategoryName(cat) {
    return (typeof cat === 'number') ? `${cat}kg` : cat;
}

const ALVOS_POR_ORDENHA = {
  // Metas para 1ª, 2ª, 3ª, 4ª, 5ª e 6ª ordenha
    30: [15, 30, 45, 60, 75, 90], 
    40: [20, 40, 60, 80, 100, 120],
};

/*
ATUALIZADO: Pega o valor "alvo" de produção para uma categoria e ordenha.
 */
function getAlvoDaOrdenha(categoria, ordenhaIdx) {
    // Mapeia os índices do cronograma geral (0-8) para os índices de ordenha das categorias 30/40 (0-5).
    const mapaOrdenhas = { 0:0, 1:0, 2:1, 3:2, 4:2, 5:3, 6:4, 7:4, 8:5 };
    const ordenhaEquivalente = mapaOrdenhas[ordenhaIdx];

    if (ALVOS_POR_ORDENHA[categoria] && ALVOS_POR_ORDENHA[categoria][ordenhaEquivalente] !== undefined) {
        return ALVOS_POR_ORDENHA[categoria][ordenhaEquivalente];
    }
    return 0;
}

/**
 * Calcula o desvio padrão de uma lista de números (produções).
 * Usado como critério de desempate para a regularidade.
 * @param {number[]} array - A lista de produções do animal até a ordenha atual.
 * @returns {number} - O valor do desvio padrão.
 */
function calculateStandardDeviation(array) {
    if (!array || array.length < 2) {
        return 0; // Não há desvio com 0 ou 1 valor.
    }
    const n = array.length;
    const mean = array.reduce((a, b) => a + b) / n;
    const variance = array.reduce((a, b) => a + (b - mean) ** 2, 0) / n;
    return Math.sqrt(variance);
}

/**
 * ATUALIZADO: Função principal do ranking com a nova lógica de mapeamento de ordenhas
 * E com o critério de DESEMPATE por MENOR DESVIO PADRÃO (regularidade).
 */
function rankingPorProximidade(categoria, ordenhaIdx, includeDisqualified) {
    const filteredData = includeDisqualified ?
        DATA.filter(a => a.categoria === categoria) :
        DATA.filter(a => a.categoria === categoria && a.classificada);

    const mapaOrdenhas = { 0: 0, 1: 0, 2: 1, 3: 2, 4: 2, 5: 3, 6: 4, 7: 4, 8: 5 };

    const processedData = filteredData.map(a => {
        let ordenhaParaCalculo = ordenhaIdx;
        if (categoria !== 'Livre') {
            ordenhaParaCalculo = mapaOrdenhas[ordenhaIdx];
        }
        const indiceFinal = Math.min(ordenhaParaCalculo, a.producao.length - 1);
        const producoesAteAgora = a.producao.slice(0, indiceFinal + 1);

        return {
            a,
            total: totalAnimalAteOrdenha(a, indiceFinal),
            // Pré-calcula o desvio padrão para usar no desempate
            stdDev: calculateStandardDeviation(producoesAteAgora)
        };
    });

    if (categoria === 'Livre') {
        // Para 'Livre', ordena pela maior produção.
        return processedData.sort((x, y) => {
            // Critério 1: Maior produção total
            const diffTotal = y.total - x.total;
            if (diffTotal !== 0) return diffTotal;

            // Critério 2 (Desempate): Menor desvio padrão (mais regular)
            return x.stdDev - y.stdDev;
        });
    } else {
        // Para 30/40kg, calcula a diferença e ordena.
        const alvo = getAlvoDaOrdenha(categoria, ordenhaIdx);
        return processedData.map(item => ({
            ...item,
            diferenca: Math.abs(item.total - alvo)
        })).sort((x, y) => {
            // Critério 1: Menor diferença para o alvo
            const diffDiferenca = x.diferenca - y.diferenca;
            if (diffDiferenca !== 0) return diffDiferenca;

            // Critério 2 (Desempate): Menor desvio padrão (mais regular)
            return x.stdDev - y.stdDev;
        });
    }
}

// ... (O restante das funções de cálculo auxiliares permanece o mesmo)
function truncar3(n) {
  return (Math.round(n * 1000) / 1000).toFixed(3);
}

function formatKg(n) {
  return `${truncar3(n)} kg`;
}

function totalAnimal(a) {
  return a.producao.reduce((acc, v) => acc + v, 0);
}

function totalAnimalAteOrdenha(a, ordenhaIdx) {
  return a.producao.slice(0, ordenhaIdx + 1).reduce((acc, v) => acc + v, 0);
}

function totalGeral() {
  return DATA.filter(a => a.classificada).reduce((acc, a) => acc + totalAnimalAteOrdenha(a, ORDENHA_ATUAL), 0);
}

function maiorOrdenha() {
  let best = { valor: 0, animal: null, sessao: null };
  DATA.filter(a => a.classificada).forEach(a => {
    a.producao.slice(0, ORDENHA_ATUAL + 1).forEach((v, i) => {
      if (v > best.valor) {
        best = { valor: v, animal: a, sessao: SESSOES[i] };
      }
    });
  });
  return best;
}

function renderMetrica() { 
    document.getElementById('m-animais').textContent = DATA.length; 
    document.getElementById('m-total').textContent = formatKg(totalGeral()); 
    const media = totalGeral() / DATA.length || 0;
    document.getElementById('m-media').textContent = formatKg(media);
    const best = maiorOrdenha(); 
    if (best.animal) { 
        document.getElementById('m-maior').textContent = formatKg(best.valor); 
        document.getElementById('m-maior-desc').textContent = `${best.animal.nome} • ${formatCategoryName(best.animal.categoria)} • ${best.sessao.label}`; 
    } else { 
        document.getElementById('m-maior').textContent = '0.000 kg'; 
        document.getElementById('m-maior-desc').textContent = 'Nenhuma ordenha registrada'; 
    }
    const wrap = document.getElementById('cat-destaques'); 
    wrap.innerHTML = ''; 
    CATS.forEach(cat => { 
        const ultimaOrdenha = (cat === 'Livre') ? 8 : 8; // A última ordenha do cronograma geral é o índice 8
        const top = rankingPorProximidade(cat, ultimaOrdenha, false)[0]; 
        if (top) { 
            const el = document.createElement('div'); 
            el.className = 'card'; 
            el.innerHTML = `<div style="display:flex; align-items:flex-end; justify-content:space-between; gap:12px"><div><div style="opacity:.8; font-weight:600">Categoria ${formatCategoryName(top.a.categoria)}</div><div style="font-size: clamp(22px, 3vw, 36px); font-weight:900">${top.a.nome}</div><div style="opacity:.8">${top.a.baia} • Produtor: ${top.a.produtor}</div></div><div style="text-align:right"><div style="font-size: clamp(18px, 2vw, 28px); opacity:.85">Total Final</div><div style="font-size: clamp(26px, 4vw, 44px); font-weight:900">${formatKg(totalAnimal(top.a))}</div></div></div>`; 
            wrap.appendChild(el); 
        } 
    }); 
}

/*
function renderRankingGeral() {
  const cont = document.getElementById('rank-geral');
  cont.innerHTML = '';

  // Combina os rankings de todas as categorias
  const data = CATS.flatMap(cat => rankingPorProximidade(cat, ORDENHA_ATUAL, true))
    .sort((x, y) => {
      // A ordenação geral é complexa, vamos manter a proximidade para 30/40 e total para livre
      if (y.a.categoria === 'Livre' && x.a.categoria !== 'Livre') return 1;
      if (x.a.categoria === 'Livre' && y.a.categoria !== 'Livre') return -1;
      if (x.a.categoria === 'Livre' && y.a.categoria === 'Livre') return y.total - x.total;
      return x.diferenca - y.diferenca;
    })
    .slice(0, 10);

  if (data.length === 0) return;
  const max = data.reduce((max, item) => Math.max(max, item.total), 0) || 1;
  data.forEach((r, i) => {
    const isDisqualified = !r.a.classificada;
    const rankClass = isDisqualified ? 'desclassificada' : '';
    const barClass = isDisqualified ? 'bar-danger' : 'bar';
    const item = document.createElement('div');
    item.className = 'rank-item';
    item.innerHTML = `<div style="opacity:.85; font-weight:800" class="${rankClass}">${String(i + 1).padStart(2, '0')}</div><div class="bar-wrap"><div class="${barClass}" style="width:${(r.total / max * 100).toFixed(1)}%"></div></div><div style="text-align:right; font-weight:800" class="${rankClass}">${formatKg(r.total)}</div>`;
    const label = document.createElement('div');
    label.style.gridColumn = '1 / span 3';
    label.style.marginTop = '-6px';
    label.style.color = 'var(--muted)';
    label.textContent = `${r.a.nome} • ${r.a.baia} • Categoria: ${formatCategoryName(r.a.categoria)} • Produtor: ${r.a.produtor}`;
    cont.appendChild(item);
    cont.appendChild(label);
  });
}
*/

/**
 * Preenche o slide 3 com os rankings Top 10 de cada categoria, lado a lado.
 */
function renderRankingsCategorias() {
    const configs = [
        { cat: 30, el: 'rank-30' },
        { cat: 40, el: 'rank-40' },
        { cat: 'Livre', el: 'rank-livre' }
    ];
    configs.forEach(({ cat, el }) => {
        const cont = document.getElementById(el);
        cont.innerHTML = '';
        const data = rankingPorProximidade(cat, ORDENHA_ATUAL, true).slice(0, 10);
        if (data.length === 0) return;
        const maxTotal = data.reduce((max, item) => Math.max(max, item.total), 0) || 1;
        data.forEach((r, i) => {
            const isDisqualified = !r.a.classificada;
            const rankClass = isDisqualified ? 'desclassificada' : '';
            const barClass = isDisqualified ? 'bar-danger' : 'bar';
            const item = document.createElement('div');
            item.className = 'rank-item';
            item.innerHTML = `<div style="opacity:.85; font-weight:800" class="${rankClass}">${String(i + 1).padStart(2, '0')}</div><div class="bar-wrap"><div class="${barClass}" style="width:${(r.total / maxTotal * 100).toFixed(1)}%"></div></div><div style="text-align:right; font-weight:800" class="${rankClass}">${formatKg(r.total)}</div>`;
            const label = document.createElement('div');
            label.style.gridColumn = '1 / span 3';
            label.style.marginTop = '-6px';
            label.style.color = 'var(--muted)';
            
            // Lógica simplificada para mostrar a diferença
            let diffText = '';
            if (cat !== 'Livre' && r.diferenca !== undefined) {
                 const alvo = getAlvoDaOrdenha(cat, ORDENHA_ATUAL);
                 if (alvo > 0) diffText = ` (Dif: ${truncar3(r.diferenca)}kg)`;
            }

            label.textContent = `${r.a.nome} • ${r.a.baia} • Produtor: ${r.a.produtor}${diffText}`;
            cont.appendChild(item);
            cont.appendChild(label);
        });
    });
}


/**
 * Função principal da paginação. Renderiza os slides detalhados (4, 5, 6) e cria
 * slides dinâmicos adicionais se uma categoria tiver mais de 15 animais.
 * Também oculta os slides de categorias que não têm animais.
 */
function renderRankingsDetalhados() {
    const configs = [{ cat: 30, el: 'rank-cat-30', titleElId: 'alvo-cat-30', originalSlideId: 'slide-4' }, { cat: 40, el: 'rank-cat-40', titleElId: 'alvo-cat-40', originalSlideId: 'slide-5' }, { cat: 'Livre', el: 'rank-cat-livre', titleElId: 'titulo-cat-livre', originalSlideId: 'slide-6' }];
    configs.forEach(({ originalSlideId }) => { const slide = document.getElementById(originalSlideId); if (slide) { slide.style.display = 'flex'; } });
    const pageSize = 15;
    configs.forEach(({ cat, el, titleElId, originalSlideId }) => {
        const originalSlide = document.getElementById(originalSlideId);
        const data = rankingPorProximidade(cat, ORDENHA_ATUAL, true).map((item, index) => ({ ...item, rank: index + 1 }));
        if (data.length === 0) { originalSlide.style.display = 'none'; return; }
        const totalPages = Math.ceil(data.length / pageSize);
        let lastSlideForCategory = originalSlide;
        for (let page = 0; page < totalPages; page++) {
            const pageData = data.slice(page * pageSize, (page + 1) * pageSize);
            let baseTitle;
            if (cat === 'Livre') {
                baseTitle = `Ranking Categoria Estilo Livre - ${SESSOES[ORDENHA_ATUAL].label}`;
            } else {
                const alvo = getAlvoDaOrdenha(cat, ORDENHA_ATUAL);
                if (alvo > 0) { baseTitle = `Ranking Categoria ${formatCategoryName(cat)} • Alvo ${formatKg(alvo)} no ${SESSOES[ORDENHA_ATUAL].label}`; } 
                else { baseTitle = `Ranking Categoria ${formatCategoryName(cat)} - Aguardando...`; }
            }
            const paginationText = totalPages > 1 ? ` (Página ${page + 1}/${totalPages})` : '';
            const fullTitle = baseTitle + paginationText;
            if (page === 0) { const titleEl = document.getElementById(titleElId); if (titleEl) titleEl.textContent = fullTitle; renderAnimalCardsToContainer(document.getElementById(el), pageData, cat); } 
            else { const newSlide = document.createElement('section'); newSlide.className = 'slide dynamic-slide'; newSlide.style.display = 'flex'; newSlide.id = `dynamic-slide-${cat}-page-${page + 1}`; newSlide.innerHTML = `<div class="card" style="display:flex; flex-direction:column"><h3 style="text-align:center">${fullTitle}</h3><div class="rank-cat"></div></div>`; renderAnimalCardsToContainer(newSlide.querySelector('.rank-cat'), pageData, cat); lastSlideForCategory.insertAdjacentElement('afterend', newSlide); lastSlideForCategory = newSlide; }
        }
    });
}

function renderAnimalCardsToContainer(container, pageData, cat) {
    container.innerHTML = '';
    pageData.forEach(r => {
        const isDisqualified = !r.a.classificada;
        const card = document.createElement('div');
        card.className = `card ${isDisqualified ? 'desclassificada' : ''}`;
        
        let diffHtml = '';
        if (cat !== 'Livre' && r.diferenca !== undefined) {
            diffHtml = `<div style="text-align:right"><h4 style="margin:0 0 6px; font-size:12px; color:var(--muted)">Diferença para o alvo:</h4><div style="font-size: clamp(16px, 2.5vw, 24px); font-weight:900">${formatKg(r.diferenca)}</div></div>`;
        }
        
        // Determina a quantidade de ordenhas a exibir com base no animal
        let ordenhasParaMostrar = r.a.producao.length;
        if (cat !== 'Livre') {
            const mapaOrdenhas = { 0:0, 1:0, 2:1, 3:2, 4:2, 5:3, 6:4, 7:4, 8:5 };
            ordenhasParaMostrar = mapaOrdenhas[ORDENHA_ATUAL] + 1;
        } else {
            ordenhasParaMostrar = ORDENHA_ATUAL + 1;
        }

        card.innerHTML = `<div style="display:flex; justify-content:space-between; align-items:flex-start"><div><div style="font-weight:700; opacity:.8; font-size:14px">#${String(r.rank).padStart(2, '0')}</div><div class="value" style="font-size: clamp(22px, 3.5vw, 32px); margin-top:4px">${r.a.nome}</div><div style="opacity:.8; font-size:14px; margin-top:2px">Produtor: ${r.a.produtor} </div><div style="opacity:.8; font-size:14px; margin-top:2px">${r.a.baia}</div>${isDisqualified ? '<div class="desclassificada-note">Animal desclassificado</div>' : ''}</div><div style="text-align:right"><div style="font-size: clamp(16px, 2.5vw, 24px); font-weight:900">${formatKg(r.total)}</div><div style="font-size:11px; opacity:.8">Total Acumulado</div></div></div><div style="margin-top:12px; display:flex; justify-content:space-between; align-items:center;"><div><h4 style="margin:0 0 6px; font-size:12px; color:var(--muted)">Produção por ordenha:</h4><div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:6px; font-size:14px; font-weight:500; opacity:.9">${r.a.producao.slice(0, Math.min(ordenhasParaMostrar, r.a.producao.length)).map(p => `<div>${truncar3(p)}</div>`).join('')}</div></div>${diffHtml}</div>`;
        container.appendChild(card);
    });
}

function renderPremiacao() {
    const container = document.getElementById('awards');
    container.innerHTML = '';
    const premiosPorCategoria = {
        30: [
          { icon: '🏆', valor: 'R$ 3.000,00 + 30 sacos de farelo', titulo: 'Campeã' },
          { icon: '🥈', valor: 'R$ 2.000,00 + 20 sacos de farelo', titulo: 'Vice-Campeã' },
          { icon: '🥉', valor: 'R$ 1.000,00 + 15 sacos de farelo', titulo: '3º Lugar' },
          { icon: '🎖️', valor: '15 sacos de farelo', titulo: '4º Lugar' },
          { icon: '🎖', valor: '10 sacos de farelo', titulo: '5º Lugar' },
        ],

        40: [
          { icon: '🏆', valor: 'R$ 3.000,00 + 35 sacos de farelo', titulo: 'Campeã' },
          { icon: '🥈', valor: 'R$ 2.000,00 + 30 sacos de farelo', titulo: 'Vice-Campeã' }, 
          { icon: '🥉', valor: 'R$ 1.000,00 + 15 sacos de farelo', titulo: '3º Lugar' }, 
          { icon: '🎖️', valor: '15 sacos de farelo', titulo: '4º Lugar' },
          { icon: '🎖', valor: '10 sacos de farelo', titulo: '5º Lugar' }
        ],

        'Livre': [
          { icon: '🏆', valor: 'R$ 4.000,00 + 40 sacos de farelo', titulo: 'Campeã' },
          { icon: '🥈', valor: 'R$ 3.000,00 + 30 sacos de farelo', titulo: 'Vice-Campeã' }, 
          { icon: '🥉', valor: 'R$ 2.000,00 + 20 sacos de farelo', titulo: '3º Lugar' }, 
          { icon: '🎖️', valor: '20 sacos de farelo', titulo: '4º Lugar' },
          { icon: '🎖', valor: '15 sacos de farelo', titulo: '5º Lugar' }
        ]
    };
    CATS.forEach(cat => {
        const ranking = rankingPorProximidade(cat, ORDENHA_ATUAL, false).slice(0, 5);
        if (ranking.length > 0) {
            const bloco = document.createElement('div');
            bloco.className = 'award';
            bloco.innerHTML = `<h3 style="text-align:center; margin-bottom:8px;">Categoria ${formatCategoryName(cat)}</h3>`;
            ranking.forEach((r, idx) => {
                const premio = premiosPorCategoria[cat][idx];
                bloco.innerHTML += `<div style="display:flex; align-items:center; justify-content:space-between; padding:6px 0; border-bottom:1px solid rgba(255,255,255,.08);"><div style="font-size:2rem;">${premio.icon}</div><div style="flex:1; margin-left:10px;"><strong>${premio.titulo}</strong><br>${r.a.nome} <span style="color:var(--muted); font-size:0.9em;">• ${r.a.baia} • Produtor: ${r.a.produtor}</span></div><div style="font-weight:bold; color:var(--gold); margin-left: 30px">${premio.valor}</div></div>`;
            });
            container.appendChild(bloco);
        }
    });
}

function renderAll() {
// Verifica se o slide ativo no momento é um slide dinâmico.
    const activeSlide = document.querySelector('.slide.active');
    if (activeSlide && activeSlide.classList.contains('dynamic-slide')) {
        // Se for, nós PULAMOS esta atualização de 5 segundos para não apagar o slide
        // que o usuário está vendo. A atualização acontecerá no próximo ciclo de 5s,
        // quando a rotação provavelmente já terá mudado para um slide estático.
        console.log("Atualização de dados adiada para não interromper a visualização do slide dinâmico.");
        return;
    }
  removeDynamicSlides();
  renderMetrica();
  //renderRankingGeral();
  renderRankingsCategorias();
  renderRankingsDetalhados();
  renderPremiacao();
  updateOrdenhaButtons();

  const allSlides = document.querySelectorAll('.slide');
  totalSlides = allSlides.length;
  if (current >= totalSlides) {
    current = 0;
  }
  allSlides.forEach((s, idx) => {
    s.classList.toggle('active', idx === current);
  });
}

function removeDynamicSlides() {
  document.querySelectorAll('.dynamic-slide').forEach(s => s.remove());
}

let current = 0;
let totalSlides = 0;
let rotating = true;
const ROTATE_MS = 5000;
let timer = null;

function showSlide(i) {
  const allSlides = document.querySelectorAll('.slide');
  totalSlides = allSlides.length;
  if (totalSlides === 0) return;

  current = (i + totalSlides) % totalSlides;

  allSlides.forEach((s, idx) => {
    s.classList.toggle('active', idx === current);
  });
}

function rotateToNextSlide() {
  const allSlides = document.querySelectorAll('.slide');
  if (allSlides.length <= 1) return;
  let nextIndex = (current + 1) % allSlides.length;
  let failsafe = 0; while (allSlides[nextIndex].style.display === 'none' && failsafe < allSlides.length) {
    nextIndex = (nextIndex + 1) % allSlides.length; failsafe++;
  }
  if (failsafe < allSlides.length) {
    showSlide(nextIndex);
  }
}

function startRotation() {
  stopRotation();
  totalSlides = document.querySelectorAll('.slide').length;
  if (totalSlides > 1) {
    timer = setInterval(rotateToNextSlide, ROTATE_MS);
  }
  rotating = true; updateRotateBadge();
}
function stopRotation() {
  if (timer) clearInterval(timer); timer = null;
  rotating = false;
  updateRotateBadge();
}

function toggleRotation() {
  rotating ? stopRotation() : startRotation();
}

function updateRotateBadge() {
  const rotateState = document.getElementById('rotate-state');
  if (rotateState) {
    rotateState.textContent = `⟳ Rotação: ${rotating ? 'ativa' : 'pausada'}`;
  }
  const toggleBtn = document.getElementById('toggle-rotate');
  if (toggleBtn) {
    toggleBtn.textContent = rotating ? '⏸︎ Pausar' : '▶ Retomar';
  }
}

function updateClock() {
  const clock = document.getElementById('clock');
  if (clock) {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    clock.textContent = `${hours}:${minutes}:${seconds}`;
  }
}

function ajustarAlturaSlides() {
  const header = document.querySelector('.header');
  const slides = document.querySelector('.slides');
  if (header && slides) {
    slides.style.height = `calc(100% - ${header.offsetHeight}px)`;
  }
}

// Evento disparado quando a página termina de carregar
window.addEventListener('load', () => {
  ajustarAlturaSlides();
  renderAll();

  const toggleBtn = document.getElementById('toggle-rotate');
  const isMobile = window.matchMedia('(max-width:768px)').matches;

  if (isMobile) {
    stopRotation();
    toggleBtn?.classList.add('hidden'); // Esconde no mobile
    const rotateState = document.getElementById('rotate-state');
    if (rotateState) rotateState.textContent = 'Modo página única';
  } else {
    toggleBtn?.classList.remove('hidden'); // Garante que esteja visível no desktop
    startRotation();
  }
});

window.addEventListener('keydown', (e) => {
  if (e.key >= '1' && e.key <= '9') {
    showSlide(parseInt(e.key, 10) - 1); stopRotation();
  }
  if (e.code === 'Space') {
    e.preventDefault();
    toggleRotation();
  }
  if (e.key === 'f' || e.key === 'F') {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => console.error(err));
    }
    else {
      document.exitFullscreen();
    }
  }
});

window.addEventListener('resize', () => {
  ajustarAlturaSlides();
  const toggleBtn = document.getElementById('toggle-rotate');
  const mobileNow = window.matchMedia('(max-width:768px)').matches;

  if (mobileNow) {
    if (rotating) stopRotation();
    toggleBtn?.classList.add('hidden');
    const rotateState = document.getElementById('rotate-state');
    if (rotateState) rotateState.textContent = 'Modo página única';
  } else {
    toggleBtn?.classList.remove('hidden');
    if (!rotating && !timer) startRotation();
  }
});

setInterval(updateClock, 1000);
setInterval(renderAll, 5000);

// ADICIONE ESTE BLOCO DE CÓDIGO NO FINAL DO SEU SCRIPT
document.querySelectorAll('.ordenha-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const ordenha = parseInt(btn.dataset.ordenha);
        
        if (ordenha > maxOrdenhaDisponivel) {
            console.log(`Dados para a ordenha ${ordenha + 1} ainda não disponíveis.`);
            return;
        }

        if (ordenha !== ORDENHA_ATUAL) {
            ORDENHA_ATUAL = ordenha;
            renderAll();
        }
    });
});