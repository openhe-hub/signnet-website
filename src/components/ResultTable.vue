<script setup>
const props = defineProps({
  table: { type: Object, required: true },
})

// Cells in gapCol render red, gainCol render green. First two columns are
// labels (left-aligned); the rest are numeric (mono, right-ish aligned).
function cellClass(rowIdx, colIdx) {
  const t = props.table
  const classes = []
  if (colIdx === t.gapCol) classes.push('gap')
  if (colIdx === t.gainCol) classes.push('gain')
  if (colIdx >= 2) classes.push('mono', 'num')
  else classes.push('label')
  return classes
}
</script>

<template>
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th
            v-for="(col, i) in table.columns"
            :key="col"
            :class="{ num: i >= 2 }"
          >
            {{ col }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(row, r) in table.rows"
          :key="r"
          :class="{
            'row-emph': table.emphasizeLast && r === table.rows.length - 1,
            'row-indent': typeof row[0] === 'string' && row[0].startsWith('  '),
          }"
        >
          <td v-for="(cell, c) in row" :key="c" :class="cellClass(r, c)">
            {{ typeof cell === 'string' ? cell.trim() : cell }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table-wrap {
  overflow-x: auto;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}
table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9rem;
  min-width: 560px;
}
thead th {
  position: sticky;
  top: 0;
  background: rgba(18, 18, 30, 0.92);
  backdrop-filter: blur(8px);
  color: var(--text-soft);
  font-weight: 600;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  text-align: left;
  padding: 0.8rem 1rem;
  border-bottom: 1px solid var(--border-strong);
  white-space: nowrap;
}
thead th.num { text-align: right; }
tbody td {
  padding: 0.62rem 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  color: var(--text);
}
tbody tr:last-child td { border-bottom: none; }
tbody tr:hover td { background: rgba(255, 255, 255, 0.03); }
td.num { text-align: right; }
td.label { color: var(--text-soft); white-space: nowrap; }
td.gap { color: var(--gap); font-weight: 600; }
td.gain { color: var(--gain); font-weight: 600; }
.row-emph td {
  background: rgba(139, 92, 246, 0.1);
  font-weight: 600;
}
.row-emph td.label { color: var(--text); }
.row-indent td.label { padding-left: 1.8rem; color: var(--text-dim); }
</style>
