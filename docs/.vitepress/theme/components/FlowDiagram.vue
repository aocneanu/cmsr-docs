<template>
    <figure class="cmsr-flow-diagram"
        :aria-label="title">
        <figcaption class="cmsr-flow-caption">
            <span class="cmsr-flow-kicker">Diagramă de flux</span>
            <strong>{{ title }}</strong>
            <span v-if="description">{{ description }}</span>
        </figcaption>

        <ol class="cmsr-flow-list">
            <li v-for="(step, index) in steps"
                :key="`${index}-${step.title}`"
                class="cmsr-flow-item">
                <article class="cmsr-flow-node"
                    :class="`is-${step.type ?? 'action'}`">
                    <span class="cmsr-flow-role">{{ step.role }}</span>
                    <strong>{{ step.title }}</strong>
                    <p v-if="step.description">{{ step.description }}</p>
                </article>

                <div v-if="step.branches?.length"
                    class="cmsr-flow-branching">
                    <span class="cmsr-flow-arrow"
                        aria-hidden="true">↓</span>
                    <div class="cmsr-flow-branches">
                        <article v-for="branch in step.branches"
                            :key="branch.title"
                            class="cmsr-flow-branch"
                            :class="`is-${branch.type ?? 'outcome'}`">
                            <span class="cmsr-flow-branch-label">{{ branch.label }}</span>
                            <strong>{{ branch.title }}</strong>
                            <p v-if="branch.description">{{ branch.description }}</p>
                        </article>
                    </div>
                </div>

                <span v-if="index < steps.length - 1"
                    class="cmsr-flow-arrow"
                    aria-hidden="true">↓</span>
            </li>
        </ol>
    </figure>
</template>

<script setup>
defineOptions({
    name: 'FlowDiagram',
});

defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: null,
    },
    steps: {
        type: Array,
        required: true,
    },
});
</script>
