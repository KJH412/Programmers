function solution(bandage, health, attacks) {
    let [castTime, healPerSec, extraHeal] = bandage; 
    let maxHealth = health; // 최대 체력
    let currentHealth = health; // 현재 체력 
    let success = 0; // 연속 성공
    let attackIndex = 0; // 현재 공격 인덱스

    let lastAttackTime = attacks[attacks.length - 1][0];
    
    for (let time = 1; time <= lastAttackTime; time++) {
        
        if (attackIndex < attacks.length && attacks[attackIndex][0] === time) {
            currentHealth -= attacks[attackIndex][1];
            success = 0; 
            attackIndex++; // 다음 공격

            if (currentHealth <= 0) {
                return -1; // 체력 0 종료
            }
        } else {
            // 회복
            currentHealth += healPerSec;
            success++;

            // 체력 초과
            if (currentHealth > maxHealth) {
                currentHealth = maxHealth;
            }

            // 연속 붕대 감기 성공시 추가 회복
            if (success === castTime) {
                currentHealth += extraHeal;
                if (currentHealth > maxHealth) {
                    currentHealth = maxHealth; 
                }
                success = 0; 
            }
        }
    }

    return currentHealth; 
}

