import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const fieldClassName =
  "h-11 w-full rounded-md border border-white/10 bg-[#141516] px-3 text-sm text-white placeholder:text-zinc-500 focus-visible:border-white/40 focus-visible:ring-2 focus-visible:ring-white/20 focus-visible:ring-offset-0";

const selectClassName =
  "h-11 w-full rounded-md border border-white/10 bg-[#141516] px-3 text-sm text-white focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20";

export default function LoginPage() {
  return (
    <section className="flex w-full flex-col gap-8 px-6 py-8 text-white">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
          Dados básicos do usuário
        </p>
        <h2 className="text-2xl font-semibold text-white">
          Personalize o seu treino com o algoritmo da força
        </h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          Estas informações ajudam a ajustar volume, intensidade e foco do seu plano.
        </p>
      </header>

      <form className="flex flex-col gap-6">
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="name" className="text-xs uppercase tracking-wide text-zinc-400">
              Nome (opcional)
            </Label>
            <Input
              id="name"
              name="name"
              placeholder="Como devemos te chamar?"
              className={fieldClassName}
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="age" className="text-xs uppercase tracking-wide text-zinc-400">
              Idade
            </Label>
            <Input
              id="age"
              name="age"
              type="number"
              min={0}
              placeholder="Ex: 29"
              className={fieldClassName}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="gender" className="text-xs uppercase tracking-wide text-zinc-400">
              Sexo / Gênero
            </Label>
            <select id="gender" name="gender" defaultValue="" className={selectClassName}>
              <option value="" disabled>
                Selecione uma opção
              </option>
              <option value="feminino">Feminino</option>
              <option value="masculino">Masculino</option>
              <option value="nao-binario">Não-binário</option>
              <option value="prefiro-nao-informar">Prefiro não informar</option>
              <option value="outro">Outro</option>
            </select>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="height" className="text-xs uppercase tracking-wide text-zinc-400">
              Altura
            </Label>
            <Input
              id="height"
              name="height"
              type="number"
              step="0.01"
              min={0}
              placeholder="Ex: 1,75"
              className={fieldClassName}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="weight" className="text-xs uppercase tracking-wide text-zinc-400">
              Peso atual
            </Label>
            <Input
              id="weight"
              name="weight"
              type="number"
              step="0.1"
              min={0}
              placeholder="Ex: 72"
              className={fieldClassName}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="experience" className="text-xs uppercase tracking-wide text-zinc-400">
            Nível de experiência
          </Label>
          <select id="experience" name="experience" defaultValue="" className={selectClassName}>
            <option value="" disabled>
              Selecione o nível
            </option>
            <option value="iniciante">Iniciante</option>
            <option value="intermediario">Intermediário</option>
            <option value="avancado">Avançado</option>
          </select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="frequency" className="text-xs uppercase tracking-wide text-zinc-400">
            Frequência semanal disponível
          </Label>
          <select id="frequency" name="frequency" defaultValue="" className={selectClassName}>
            <option value="" disabled>
              Quantos dias por semana você treina?
            </option>
            <option value="2x">2x por semana</option>
            <option value="3x">3x por semana</option>
            <option value="4x">4x por semana</option>
            <option value="5x">5x por semana</option>
            <option value="6x">6x por semana</option>
            <option value="7x">Todos os dias</option>
          </select>
        </div>

        <Button type="submit" className="h-11 bg-white/90 text-zinc-900 transition hover:bg-white">
          Gerar treino personalizado
        </Button>
      </form>
    </section>
  );
}
