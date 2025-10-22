// IDP Vendor Finder - JavaScript Logic

// State Management
let currentStep = 1;
const totalSteps = 10;
const requirementsData = {};

// Step configuration
const stepConfig = [
    { name: 'Industry', key: 'industry' },
    { name: 'Ingestion', key: 'ingestion' },
    { name: 'Document Types', key: 'docTypes' },
    { name: 'Splitting', key: 'splitting' },
    { name: 'Classification', key: 'classification' },
    { name: 'Extraction', key: 'extraction' },
    { name: 'Processing', key: 'processing' },
    { name: 'Export', key: 'export' },
    { name: 'Technical', key: 'technical' },
    { name: 'Contact', key: 'contact' }
];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    showStep(1);
    updateProgressBar();
    initializeProgressSteps();
    setupRealtimeValidation();
    setupBotpoisonListeners();
});

// Navigation Functions
function nextStep() {
    // Validate current step
    if (!validateStep(currentStep)) {
        return;
    }

    // Collect data from current step
    collectStepData(currentStep);

    // Move to next step
    if (currentStep < totalSteps) {
        currentStep++;
        showStep(currentStep);
        updateProgressBar();
        scrollToTop();
    }
}

function prevStep() {
    if (currentStep > 1) {
        currentStep--;
        showStep(currentStep);
        updateProgressBar();
        scrollToTop();
    }
}

function showStep(stepIndex) {
    // Hide all steps
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });

    // Show current step
    const stepElement = document.getElementById(`step${stepIndex}`);
    if (stepElement) {
        stepElement.classList.add('active');
    }

    // Generate requirements summary when showing step 10
    if (stepIndex === 10) {
        generateRequirementsSummary();
    }
}

function scrollToTop() {
    // Scroll the main content area to top
    const mainContainer = document.querySelector('.app-main');
    if (mainContainer) {
        mainContainer.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// Progress Bar
function updateProgressBar() {
    const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;

    // Update sidebar steps
    document.querySelectorAll('.sidebar-step').forEach((step, index) => {
        const stepNumber = index + 1;
        const statusElement = step.querySelector('.step-status');

        if (stepNumber < currentStep) {
            step.classList.add('completed');
            step.classList.remove('active');
            if (statusElement) statusElement.textContent = 'Completed';
        } else if (stepNumber === currentStep) {
            step.classList.add('active');
            step.classList.remove('completed');
            if (statusElement) statusElement.textContent = 'In Progress';
        } else {
            step.classList.remove('active', 'completed');
            if (statusElement) statusElement.textContent = 'Not Started';
        }
    });
}

function initializeProgressSteps() {
    // Add click event listeners to sidebar steps
    document.querySelectorAll('.sidebar-step').forEach((stepElement) => {
        stepElement.addEventListener('click', function() {
            const targetStep = parseInt(this.getAttribute('data-step'));
            if (targetStep) {
                jumpToStep(targetStep);
            }
        });
    });
}

// Jump to specific step
function jumpToStep(targetStep) {
    // Collect current step data before jumping
    if (currentStep >= 1) {
        collectStepData(currentStep);
    }

    // Allow jumping to any step
    currentStep = targetStep;
    showStep(currentStep);
    updateProgressBar();
    scrollToTop();

    // Regenerate summary if jumping to step 10
    if (targetStep === 10) {
        generateRequirementsSummary();
    }
}

// Validation System
function clearValidationErrors(stepIndex) {
    const step = document.getElementById(`step${stepIndex}`);
    if (!step) return;

    // Remove all error states
    step.querySelectorAll('.has-error, .has-success').forEach(el => {
        el.classList.remove('has-error', 'has-success');
    });

    // Hide all error messages
    step.querySelectorAll('.error-message').forEach(el => {
        el.classList.remove('show');
    });

    // Hide validation summary
    const summary = step.querySelector('.validation-summary');
    if (summary) {
        summary.classList.remove('show');
    }
}

function showFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    if (!field) return;

    const formGroup = field.closest('.form-group');
    if (formGroup) {
        formGroup.classList.add('has-error');

        // Create or update error message
        let errorMsg = formGroup.querySelector('.error-message');
        if (!errorMsg) {
            errorMsg = document.createElement('div');
            errorMsg.className = 'error-message';
            formGroup.appendChild(errorMsg);
        }
        errorMsg.textContent = message;
        errorMsg.classList.add('show');

        // Add shake animation
        field.classList.add('shake');
        setTimeout(() => field.classList.remove('shake'), 400);
    }
}

function showGroupError(groupName, message) {
    const group = document.querySelector(`input[name="${groupName}"]`)?.closest('.checkbox-group, .radio-group');
    if (!group) return;

    group.classList.add('has-error');

    // Create or update error message
    let errorMsg = group.parentElement.querySelector('.error-message');
    if (!errorMsg) {
        errorMsg = document.createElement('div');
        errorMsg.className = 'error-message';
        group.parentElement.insertBefore(errorMsg, group.nextSibling);
    }
    errorMsg.textContent = message;
    errorMsg.classList.add('show');

    // Add shake animation
    group.classList.add('shake');
    setTimeout(() => group.classList.remove('shake'), 400);
}

function showValidationSummary(stepIndex, errors) {
    const step = document.getElementById(`step${stepIndex}`);
    if (!step) return;

    let summary = step.querySelector('.validation-summary');
    if (!summary) {
        summary = document.createElement('div');
        summary.className = 'validation-summary';
        const stepContent = step.querySelector('.step-content');
        stepContent.insertBefore(summary, stepContent.firstChild);
    }

    summary.innerHTML = `
        <h4>Please complete the following:</h4>
        <ul>
            ${errors.map(error => `<li>${error}</li>`).join('')}
        </ul>
    `;
    summary.classList.add('show');

    // Scroll to top to show summary
    scrollToTop();
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validateStep(stepIndex) {
    clearValidationErrors(stepIndex);
    const errors = [];

    switch(stepIndex) {
        case 1: // Industry & Use Case
            const industry = document.getElementById('industry').value;
            const useCase = document.getElementById('useCase').value;
            const volume = document.getElementById('documentVolume').value;

            if (!industry) {
                showFieldError('industry', 'Please select your industry');
                errors.push('Industry is required');
            }

            if (!useCase || useCase.trim() === '') {
                showFieldError('useCase', 'Please describe your use case');
                errors.push('Use case description is required');
            }

            if (!volume) {
                showFieldError('documentVolume', 'Please select your document volume');
                errors.push('Document volume is required');
            }

            if (errors.length > 0) {
                showValidationSummary(stepIndex, errors);
                return false;
            }
            return true;

        case 2: // Ingestion
            const ingestionMethods = document.querySelectorAll('input[name="ingestion"]:checked');
            if (ingestionMethods.length === 0) {
                showGroupError('ingestion', 'Please select at least one document ingestion method');
                errors.push('At least one ingestion method is required');
                showValidationSummary(stepIndex, errors);
                return false;
            }
            return true;

        case 3: // Document Types
            const docTypes = document.querySelectorAll('input[name="docTypes"]:checked');
            if (docTypes.length === 0) {
                showGroupError('docTypes', 'Please select at least one document type');
                errors.push('At least one document type is required');
                showValidationSummary(stepIndex, errors);
                return false;
            }
            return true;

        case 5: // Classification
            const categoryCount = document.getElementById('categoryCount').value;
            if (!categoryCount) {
                showFieldError('categoryCount', 'Please specify the number of document types');
                errors.push('Number of document types is required');
                showValidationSummary(stepIndex, errors);
                return false;
            }
            return true;

        case 6: // Extraction
            const extractionComplexity = document.getElementById('extractionComplexity').value;
            if (!extractionComplexity) {
                showFieldError('extractionComplexity', 'Please specify extraction complexity');
                errors.push('Extraction complexity is required');
                showValidationSummary(stepIndex, errors);
                return false;
            }
            return true;

        case 8: // Export
            const exportMethods = document.querySelectorAll('input[name="export"]:checked');
            if (exportMethods.length === 0) {
                showGroupError('export', 'Please select at least one export method');
                errors.push('At least one export method is required');
                showValidationSummary(stepIndex, errors);
                return false;
            }
            return true;

        case 9: // Technical Requirements
            const deployment = document.getElementById('deployment').value;
            const timeline = document.getElementById('timeline').value;
            const budget = document.getElementById('budget').value;
            const userCount = document.getElementById('userCount').value;

            if (!deployment) {
                showFieldError('deployment', 'Please select a deployment model');
                errors.push('Deployment preference is required');
            }

            if (!timeline) {
                showFieldError('timeline', 'Please select an implementation timeline');
                errors.push('Implementation timeline is required');
            }

            if (!budget) {
                showFieldError('budget', 'Please select a budget range');
                errors.push('Budget range is required');
            }

            if (!userCount) {
                showFieldError('userCount', 'Please select the number of users');
                errors.push('Number of users is required');
            }

            if (errors.length > 0) {
                showValidationSummary(stepIndex, errors);
                return false;
            }
            return true;

        case 10: // Contact
            const firstName = document.getElementById('firstName').value;
            const lastName = document.getElementById('lastName').value;
            const email = document.getElementById('email').value;
            const company = document.getElementById('company').value;
            const consent = document.getElementById('consent').checked;

            if (!firstName || firstName.trim() === '') {
                showFieldError('firstName', 'Please enter your first name');
                errors.push('First name is required');
            }

            if (!lastName || lastName.trim() === '') {
                showFieldError('lastName', 'Please enter your last name');
                errors.push('Last name is required');
            }

            if (!email || email.trim() === '') {
                showFieldError('email', 'Please enter your email address');
                errors.push('Email address is required');
            } else if (!validateEmail(email)) {
                showFieldError('email', 'Please enter a valid email address');
                errors.push('Valid email address is required');
            }

            if (!company || company.trim() === '') {
                showFieldError('company', 'Please enter your company name');
                errors.push('Company name is required');
            }

            if (!consent) {
                const consentGroup = document.getElementById('consent').closest('.form-group');
                if (consentGroup) {
                    consentGroup.classList.add('has-error');
                    let errorMsg = consentGroup.querySelector('.error-message');
                    if (!errorMsg) {
                        errorMsg = document.createElement('div');
                        errorMsg.className = 'error-message';
                        consentGroup.appendChild(errorMsg);
                    }
                    errorMsg.textContent = 'You must agree to receive recommendations';
                    errorMsg.classList.add('show');
                }
                errors.push('Consent is required');
            }

            if (errors.length > 0) {
                showValidationSummary(stepIndex, errors);
                return false;
            }
            return true;

        default:
            return true;
    }
}

// Real-time validation on blur
function setupRealtimeValidation() {
    const requiredFields = [
        'industry', 'useCase', 'documentVolume',
        'categoryCount', 'extractionComplexity',
        'deployment', 'timeline', 'budget', 'userCount',
        'firstName', 'lastName', 'email', 'company'
    ];

    requiredFields.forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
            field.addEventListener('blur', function() {
                const value = this.value.trim();
                const formGroup = this.closest('.form-group');

                if (value === '') {
                    if (formGroup && formGroup.classList.contains('has-error')) {
                        formGroup.classList.add('has-error');
                    }
                } else {
                    if (formGroup) {
                        formGroup.classList.remove('has-error');
                        formGroup.classList.add('has-success');
                        const errorMsg = formGroup.querySelector('.error-message');
                        if (errorMsg) {
                            errorMsg.classList.remove('show');
                        }
                    }

                    // Special validation for email
                    if (fieldId === 'email' && !validateEmail(value)) {
                        showFieldError('email', 'Please enter a valid email address');
                    }
                }
            });

            // Clear error on input
            field.addEventListener('input', function() {
                const formGroup = this.closest('.form-group');
                if (formGroup && formGroup.classList.contains('has-error')) {
                    formGroup.classList.remove('has-error');
                    const errorMsg = formGroup.querySelector('.error-message');
                    if (errorMsg) {
                        errorMsg.classList.remove('show');
                    }
                }
            });
        }
    });
}

// Data Collection
function collectStepData(stepIndex) {
    switch(stepIndex) {
        case 1: // Industry & Use Case
            requirementsData.industry = document.getElementById('industry').value;
            requirementsData.useCase = document.getElementById('useCase').value;
            requirementsData.documentVolume = document.getElementById('documentVolume').value;
            break;

        case 2: // Ingestion
            requirementsData.ingestion = Array.from(document.querySelectorAll('input[name="ingestion"]:checked'))
                .map(cb => cb.value);
            break;

        case 3: // Document Types
            requirementsData.docTypes = Array.from(document.querySelectorAll('input[name="docTypes"]:checked'))
                .map(cb => cb.value);
            requirementsData.docQuality = document.getElementById('docQuality').value;
            break;

        case 4: // Splitting
            requirementsData.splitting = document.querySelector('input[name="splitting"]:checked').value;
            if (requirementsData.splitting === 'yes') {
                requirementsData.splittingMethod = document.getElementById('splittingMethod').value;
                requirementsData.docsPerFile = document.getElementById('docsPerFile').value;
            }
            break;

        case 5: // Classification
            requirementsData.categoryCount = document.getElementById('categoryCount').value;
            requirementsData.categoryList = document.getElementById('categoryList').value;
            requirementsData.needsClassification = document.getElementById('needsClassification').checked;
            break;

        case 6: // Extraction
            requirementsData.extractionComplexity = document.getElementById('extractionComplexity').value;
            requirementsData.extractionFields = document.getElementById('extractionFields').value;
            requirementsData.extractionFeatures = Array.from(document.querySelectorAll('input[name="extractionFeatures"]:checked'))
                .map(cb => cb.value);
            break;

        case 7: // Processing
            requirementsData.processing = Array.from(document.querySelectorAll('input[name="processing"]:checked'))
                .map(cb => cb.value);
            break;

        case 8: // Export
            requirementsData.export = Array.from(document.querySelectorAll('input[name="export"]:checked'))
                .map(cb => cb.value);
            requirementsData.integrationSystems = document.getElementById('integrationSystems').value;
            break;

        case 9: // Technical Requirements
            requirementsData.deployment = document.getElementById('deployment').value;
            requirementsData.auth = Array.from(document.querySelectorAll('input[name="auth"]:checked'))
                .map(cb => cb.value);
            requirementsData.compliance = Array.from(document.querySelectorAll('input[name="compliance"]:checked'))
                .map(cb => cb.value);
            requirementsData.dataResidency = document.getElementById('dataResidency').value;
            requirementsData.timeline = document.getElementById('timeline').value;
            requirementsData.budget = document.getElementById('budget').value;
            requirementsData.userCount = document.getElementById('userCount').value;
            requirementsData.additionalNotes = document.getElementById('additionalNotes').value;
            break;

        case 10: // Contact
            requirementsData.firstName = document.getElementById('firstName').value;
            requirementsData.lastName = document.getElementById('lastName').value;
            requirementsData.email = document.getElementById('email').value;
            requirementsData.phone = document.getElementById('phone').value;
            requirementsData.company = document.getElementById('company').value;
            requirementsData.jobTitle = document.getElementById('jobTitle').value;
            requirementsData.companySize = document.getElementById('companySize').value;
            requirementsData.newsletter = document.getElementById('newsletter').checked;
            requirementsData.consent = document.getElementById('consent').checked;
            break;
    }

    console.log('Collected requirements:', requirementsData);
}

// Requirements Summary Updates
function updateRequirementsSummary() {
    // This can be extended to show live updates
    console.log('Requirements updated');
}

// Toggle Functions
function toggleSplittingDetails(show) {
    const details = document.getElementById('splittingDetails');
    if (details) {
        details.style.display = show ? 'block' : 'none';
    }
}

function updateCategoryInputs() {
    const categoryCount = document.getElementById('categoryCount').value;
    const container = document.getElementById('categoryInputContainer');

    if (categoryCount && categoryCount !== '1') {
        container.style.display = 'block';
    } else {
        container.style.display = 'none';
    }
}

function toggleExtractionDetails() {
    const complexity = document.getElementById('extractionComplexity').value;
    const details = document.getElementById('extractionDetails');

    if (complexity && complexity !== 'none') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}

// Generate Requirements Summary
function generateRequirementsSummary() {
    const summary = document.getElementById('requirementsSummary');

    let summaryHTML = '<h3>Your Requirements Summary</h3>';

    // Industry & Use Case
    if (requirementsData.industry) {
        summaryHTML += `
            <div class="summary-section">
                <h4>Industry & Use Case</h4>
                <ul>
                    <li><strong>Industry:</strong> ${formatValue(requirementsData.industry)}</li>
                    <li><strong>Use Case:</strong> ${requirementsData.useCase}</li>
                    <li><strong>Monthly Volume:</strong> ${requirementsData.documentVolume} documents</li>
                </ul>
            </div>
        `;
    }

    // Ingestion Methods
    if (requirementsData.ingestion && requirementsData.ingestion.length > 0) {
        summaryHTML += `
            <div class="summary-section">
                <h4>Document Ingestion</h4>
                <ul>
                    ${requirementsData.ingestion.map(method => `<li>${formatValue(method)}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    // Document Processing
    if (requirementsData.docTypes && requirementsData.docTypes.length > 0) {
        summaryHTML += `
            <div class="summary-section">
                <h4>Document Processing</h4>
                <ul>
                    ${requirementsData.docTypes.map(type => `<li>${formatValue(type)}</li>`).join('')}
                    ${requirementsData.splitting === 'yes' ? '<li>Document Splitting Required</li>' : ''}
                </ul>
            </div>
        `;
    }

    // Classification & Extraction
    summaryHTML += `
        <div class="summary-section">
            <h4>Classification & Extraction</h4>
            <ul>
                <li><strong>Document Types:</strong> ${requirementsData.categoryCount || 'Not specified'}</li>
                <li><strong>Extraction Complexity:</strong> ${formatValue(requirementsData.extractionComplexity)}</li>
                ${requirementsData.needsClassification ? '<li>AI Classification Required</li>' : ''}
            </ul>
        </div>
    `;

    // Processing Features
    if (requirementsData.processing && requirementsData.processing.length > 0) {
        summaryHTML += `
            <div class="summary-section">
                <h4>Processing Features</h4>
                <ul>
                    ${requirementsData.processing.map(proc => `<li>${formatValue(proc)}</li>`).join('')}
                </ul>
            </div>
        `;
    }

    // Export & Integration
    if (requirementsData.export && requirementsData.export.length > 0) {
        summaryHTML += `
            <div class="summary-section">
                <h4>Export & Integration</h4>
                <ul>
                    ${requirementsData.export.map(exp => `<li>${formatValue(exp)}</li>`).join('')}
                    ${requirementsData.integrationSystems ? `<li><strong>Systems:</strong> ${requirementsData.integrationSystems}</li>` : ''}
                </ul>
            </div>
        `;
    }

    // Technical Requirements
    summaryHTML += `
        <div class="summary-section">
            <h4>Technical Requirements</h4>
            <ul>
                <li><strong>Deployment:</strong> ${formatValue(requirementsData.deployment)}</li>
                <li><strong>Timeline:</strong> ${formatValue(requirementsData.timeline)}</li>
                <li><strong>Budget:</strong> ${requirementsData.budget || 'Not specified'}</li>
                <li><strong>Users:</strong> ${requirementsData.userCount || 'Not specified'}</li>
                ${requirementsData.compliance && requirementsData.compliance.length > 0 ?
                    `<li><strong>Compliance:</strong> ${requirementsData.compliance.map(c => c.toUpperCase()).join(', ')}</li>` : ''}
            </ul>
        </div>
    `;

    summary.innerHTML = summaryHTML;
}

function formatValue(value) {
    if (!value) return 'Not specified';

    // Convert kebab-case or snake_case to Title Case
    return value
        .replace(/[-_]/g, ' ')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

// Botpoison integration
function setupBotpoisonListeners() {
    console.log('Botpoison integration ready');
}

// Get Botpoison solution token
async function getBotpoisonToken() {
    try {
        if (typeof window.Botpoison !== 'undefined') {
            const botpoison = new window.Botpoison({
                publicKey: 'pk_53e48ba7-bd52-4dc8-9104-c837a77aea6c'
            });
            const { solution } = await botpoison.challenge();
            return solution;
        }
    } catch (error) {
        console.warn('Botpoison not available or error:', error);
    }
    return null;
}

// Submit Requirements
async function submitRequirements() {
    if (!validateStep(10)) {
        return;
    }

    collectStepData(10);

    const submitButton = document.querySelector('.btn-submit');
    submitButton.classList.add('loading');
    submitButton.textContent = 'Submitting...';
    submitButton.setAttribute('disabled', 'disabled');

    try {
        console.log('Submitting requirements data:', requirementsData);

        await mockSubmitToAPI(requirementsData);

        // Show success screen
        document.getElementById('step10').classList.remove('active');
        document.getElementById('successStep').style.display = 'block';
        document.getElementById('successStep').classList.add('active');

        // Update progress to 100%
        document.getElementById('progressFill').style.width = '100%';

        scrollToTop();

    } catch (error) {
        console.error('Submission error:', error);

        const step = document.getElementById('step10');
        let errorBox = step.querySelector('.submission-error');

        if (!errorBox) {
            errorBox = document.createElement('div');
            errorBox.className = 'submission-error';
            const stepContent = step.querySelector('.step-content');
            stepContent.insertBefore(errorBox, stepContent.firstChild);
        }

        errorBox.innerHTML = `
            <h4>Submission Error</h4>
            <p>We encountered an error while submitting your request. Please try again or contact us directly at <a href="mailto:info@idp-software.com">info@idp-software.com</a></p>
            <button class="btn btn-secondary" onclick="this.parentElement.style.display='none'">Dismiss</button>
        `;
        errorBox.style.display = 'block';

        submitButton.classList.remove('loading');
        submitButton.textContent = 'Try Again';
        submitButton.removeAttribute('disabled');

        scrollToTop();
    }
}

// API submission
async function mockSubmitToAPI(data) {
    try {
        console.log('=== VENDOR REQUIREMENTS SUBMISSION ===');
        console.log(JSON.stringify(data, null, 2));
        console.log('======================================');

        const formData = prepareFormDataForSubmission(data);

        const botpoisonToken = await getBotpoisonToken();
        if (botpoisonToken) {
            formData._botpoison = botpoisonToken;
        }

        // Submit to form endpoint
        const response = await fetch('https://submit-form.com/rNKxHWOpR', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Form submitted successfully:', result);

        return { success: true, result };

    } catch (error) {
        console.error('Form submission error:', error);
        throw error;
    }
}

// Prepare data for form submission
function prepareFormDataForSubmission(data) {
    return {
        // Contact Information
        firstName: data.firstName || '',
        lastName: data.lastName || '',
        name: `${data.firstName} ${data.lastName}`,
        email: data.email || '',
        phone: data.phone || '',
        company: data.company || '',
        jobTitle: data.jobTitle || '',
        companySize: data.companySize || '',

        // Business Requirements
        industry: data.industry || '',
        useCase: data.useCase || '',
        documentVolume: data.documentVolume || '',
        timeline: data.timeline || '',
        budget: data.budget || '',
        userCount: data.userCount || '',

        // Document Ingestion
        ingestionMethods: data.ingestion ? data.ingestion.map(m => formatValue(m)).join(', ') : '',

        // Document Processing
        documentTypes: data.docTypes ? data.docTypes.map(t => formatValue(t)).join(', ') : '',
        documentQuality: data.docQuality || '',
        splitting: data.splitting || 'no',
        splittingMethod: data.splittingMethod || '',
        docsPerFile: data.docsPerFile || '',

        // Classification & Extraction
        categoryCount: data.categoryCount || '',
        categoryList: data.categoryList || '',
        needsClassification: data.needsClassification ? 'Yes' : 'No',
        extractionComplexity: data.extractionComplexity || '',
        extractionFields: data.extractionFields || '',
        extractionFeatures: data.extractionFeatures ? data.extractionFeatures.join(', ') : '',

        // Data Processing
        processingFeatures: data.processing ? data.processing.map(p => formatValue(p)).join(', ') : '',

        // Export & Integration
        exportMethods: data.export ? data.export.map(e => formatValue(e)).join(', ') : '',
        integrationSystems: data.integrationSystems || '',

        // Technical Requirements
        deployment: data.deployment || '',
        authentication: data.auth && data.auth.length > 0 ? data.auth.join(', ') : '',
        compliance: data.compliance && data.compliance.length > 0 ? data.compliance.join(', ') : '',
        dataResidency: data.dataResidency || '',

        // Additional
        additionalNotes: data.additionalNotes || '',
        newsletter: data.newsletter ? 'Yes' : 'No',
        consent: data.consent ? 'Yes' : 'No',

        // Metadata
        _formName: 'IDP Vendor Finder',
        _subject: `Vendor Match Request from ${data.company}`,
        submissionDate: new Date().toISOString()
    };
}

// Handle browser back button
window.addEventListener('popstate', function(event) {
    if (currentStep > 0) {
        event.preventDefault();
        prevStep();
    }
});

// Auto-save to localStorage
function autoSaveRequirements() {
    try {
        localStorage.setItem('idp_vendor_requirements_draft', JSON.stringify(requirementsData));
        localStorage.setItem('idp_vendor_requirements_step', currentStep.toString());
    } catch (e) {
        console.log('Auto-save failed:', e);
    }
}

// Load saved requirements
function loadSavedRequirements() {
    try {
        const savedData = localStorage.getItem('idp_vendor_requirements_draft');
        const savedStep = localStorage.getItem('idp_vendor_requirements_step');

        if (savedData) {
            Object.assign(requirementsData, JSON.parse(savedData));
            if (savedStep) {
                currentStep = parseInt(savedStep);
                showStep(currentStep);
                updateProgressBar();
            }
        }
    } catch (e) {
        console.log('Failed to load saved requirements:', e);
    }
}

// Clear saved requirements
function clearSavedRequirements() {
    try {
        localStorage.removeItem('idp_vendor_requirements_draft');
        localStorage.removeItem('idp_vendor_requirements_step');
    } catch (e) {
        console.log('Failed to clear saved requirements:', e);
    }
}

// Auto-save every 30 seconds
setInterval(autoSaveRequirements, 30000);

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    if (e.altKey && e.key === 'ArrowRight') {
        e.preventDefault();
        nextStep();
    }

    if (e.altKey && e.key === 'ArrowLeft') {
        e.preventDefault();
        prevStep();
    }
});

console.log('IDP Vendor Finder initialized');
console.log('Features: validation, progress tracking, auto-save, keyboard navigation');
