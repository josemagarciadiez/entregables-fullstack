export class Enemy {
  name: string;
  energy: number;
  attackPower: number;
  defense: number;
  level: number;
  experienceReward: number;

  constructor(name: string, level: number) {
    this.name = name;
    this.level = level;
    this.energy = this.generateEnergy(level);
    this.attackPower = this.generateAttackPower(level);
    this.defense = this.generateDefense(level);
    this.experienceReward = this.calculateExperienceReward(level);
  }

  // Generar salud basada en el nivel
  private generateEnergy(level: number): number {
    return 50 + level * 10;
  }

  // Generar poder de ataque basado en el nivel
  private generateAttackPower(level: number): number {
    return 5 + level * 2;
  }

  // Generar defensa basada en el nivel
  private generateDefense(level: number): number {
    return 3 + level * 1.5;
  }

  // Calcular la experiencia que el jugador ganará al derrotar al enemigo
  private calculateExperienceReward(level: number): number {
    return level * 20;
  }

  // Método para que el enemigo ataque al jugador
  public attack(): number {
    console.log(`${this.name} ataca con un poder de ${this.attackPower}!`);
    return this.attackPower;
  }

  // Método para recibir daño del jugador
  public defend(damage: number): number {
    const actualDamage = Math.max(damage - this.defense, 0);
    this.energy -= actualDamage;
    console.log(
      `${this.name} ha recibido ${actualDamage} de daño. Salud restante: ${this.energy}`
    );

    if (this.energy <= 0) {
      console.log(`${this.name} ha sido derrotado!`);
    }

    return actualDamage
  }

  // Verificar si el enemigo sigue vivo
  public isAlive(): boolean {
    return this.energy > 0;
  }
}
