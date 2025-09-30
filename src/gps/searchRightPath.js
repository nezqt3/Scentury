export default async function loadData() {
  const response = await fetch("/data.json");
  return await response.json();
}

export function findPath(graph, start, end) {
  let queue = [[start]];
  let visited = new Set();

  while (queue.length > 0) {
    let path = queue.shift();
    let node = path[path.length - 1];

    console.log(path, node);

    if (node === end) return path;

    if (!visited.has(node)) {
      visited.add(node);
      for (let neighbor in graph[node]) {
        if (!visited.has(neighbor)) {
          queue.push([...path, neighbor]);
        }
      }
    }
  }
  return null;
}

export function pathToInstructions(graph, path) {
  if (!path) return ["Путь не найден"];
  let instructions = [];
  for (let i = 0; i < path.length - 1; i++) {
    let from = path[i];
    let to = path[i + 1];
    let action = graph[from][to];
    instructions.push(`Из ${from} — ${action} → ${to}`);
  }
  return instructions;
}
