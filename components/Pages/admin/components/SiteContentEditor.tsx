import React, { useState, useEffect } from 'react';
import { supabase } from '../../../../lib/supabase';
import { Loader2, Save, Eye } from 'lucide-react';

import { SiteContentContext } from '../../../../components/Context/SiteContentContext';
import Hero from '../../../../components/Sections/Hero';
import About from '../../../../components/Sections/About';
import MissionVision from '../../../../components/Sections/MissionVision';
import Contact from '../../../../components/Sections/Contact';

interface ContentSection {
    id: string;
    title: string;
    icon: string;
    component: React.FC | null;
    fields: { key: string; label: string; type: 'text' | 'textarea' | 'image' | 'color' }[];
}

const SECTIONS: ContentSection[] = [
    {
        id: 'hero',
        title: 'Hero Section',
        icon: '✨',
        component: Hero,
        fields: [
            { key: 'top_text', label: 'Top Small Text', type: 'text' },
            { key: 'title', label: 'Main Title (HTML allowed)', type: 'textarea' },
            { key: 'subtitle', label: 'Subtitle', type: 'textarea' },
            { key: 'cta_text', label: 'CTA Button Text', type: 'text' },
            { key: 'cta_link', label: 'CTA Button Link (e.g. #projects)', type: 'text' },
        ]
    },
    {
        id: 'about',
        title: 'About Us',
        icon: '🏢',
        component: About,
        fields: [
            { key: 'heading', label: 'Heading (HTML allowed)', type: 'textarea' },
            { key: 'paragraph1', label: 'Paragraph 1', type: 'textarea' },
            { key: 'paragraph2', label: 'Paragraph 2', type: 'textarea' },
            { key: 'img1', label: 'Tall Tower Image URL', type: 'image' },
            { key: 'img2', label: 'Modern Building Image URL', type: 'image' },
        ]
    },
    {
        id: 'mission_vision',
        title: 'Mission & Vision',
        icon: '🎯',
        component: MissionVision,
        fields: [
            { key: 'mission_philosophy', label: 'Mission Top Label', type: 'text' },
            { key: 'mission_title', label: 'Mission Title', type: 'text' },
            { key: 'mission_text', label: 'Mission Main Text (HTML)', type: 'textarea' },
            { key: 'mission_subtitle', label: 'Mission Hidden Subtitle', type: 'textarea' },
            { key: 'mission_cta', label: 'Mission CTA Text', type: 'text' },
            { key: 'mission_bg', label: 'Mission Background Image URL', type: 'image' },
            { key: 'vision_philosophy', label: 'Vision Top Label', type: 'text' },
            { key: 'vision_title', label: 'Vision Title', type: 'text' },
            { key: 'vision_text', label: 'Vision Main Text (HTML)', type: 'textarea' },
            { key: 'vision_subtitle', label: 'Vision Hidden Subtitle', type: 'textarea' },
            { key: 'vision_cta', label: 'Vision CTA Text', type: 'text' },
            { key: 'vision_bg', label: 'Vision Background Image URL', type: 'image' },
        ]
    },
    {
        id: 'contact',
        title: 'Contact Info',
        icon: '📞',
        component: Contact,
        fields: [
            { key: 'address', label: 'Headquarters Address', type: 'text' },
            { key: 'phone', label: 'Phone Number', type: 'text' },
            { key: 'email', label: 'Email Address', type: 'text' },
        ]
    },
    {
        id: 'theme',
        title: 'Global Theme',
        icon: '🎨',
        component: null, // No specific component, applies globally
        fields: [
            { key: 'primary', label: 'Primary Accent Color (Hex)', type: 'color' }
        ]
    }
];

const SiteContentEditor: React.FC = () => {
    const [content, setContent] = useState<Record<string, any>>({});
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [activeSection, setActiveSection] = useState(SECTIONS[0].id);

    useEffect(() => {
        fetchContent();
    }, []);

    const fetchContent = async () => {
        setLoading(true);
        const { data, error } = await supabase.from('site_content').select('*');
        if (error) {
            console.error('Error fetching site content:', error);
        } else if (data) {
            const contentMap = data.reduce((acc, item) => ({ ...acc, [item.id]: item.content }), {});
            setContent(contentMap);
        }
        setLoading(false);
    };

    const handleFieldChange = (sectionId: string, fieldKey: string, value: string) => {
        setContent(prev => ({
            ...prev,
            [sectionId]: {
                ...(prev[sectionId] || {}),
                [fieldKey]: value
            }
        }));
    };

    const handleSave = async (sectionId: string) => {
        setSaving(true);
        try {
            const sectionData = content[sectionId] || {};

            const { data: existingData } = await supabase.from('site_content').select('id').eq('id', sectionId);

            if (existingData && existingData.length > 0) {
                const { error } = await supabase.from('site_content').update({ content: sectionData }).eq('id', sectionId);
                if (error) throw error;
            } else {
                const { error } = await supabase.from('site_content').insert([{ id: sectionId, content: sectionData }]);
                if (error) throw error;
            }

            alert('Saved successfully!');
        } catch (error) {
            console.error('Error saving content:', error);
            alert('Failed to save content.');
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center py-20">
                <Loader2 className="animate-spin text-primary" size={40} />
            </div>
        );
    }

    const currentSection = SECTIONS.find(s => s.id === activeSection)!;
    const sectionData = content[activeSection] || {};
    const ActiveComponent = currentSection.component;

    return (
        <div className="flex flex-col h-[calc(100vh-100px)]">
            <h2 className="text-2xl font-semibold mb-6 flex-shrink-0">Visual Content Builder</h2>

            <div className="flex flex-1 gap-6 min-h-0">
                {/* Left Pane: Editor Form (1/3 width) */}
                <div className="w-[350px] flex-shrink-0 flex flex-col bg-black/20 border border-white/5 rounded-2xl overflow-hidden">
                    {/* Sidebar Tabs */}
                    <div className="flex overflow-x-auto p-4 pb-3 border-b border-white/5 gap-2 flex-shrink-0">
                        {SECTIONS.map(section => (
                            <button
                                key={section.id}
                                onClick={() => setActiveSection(section.id)}
                                className={`flex-shrink-0 px-4 py-2 rounded-lg transition-colors whitespace-nowrap flex items-center gap-2 text-sm ${activeSection === section.id
                                    ? 'bg-primary/20 text-primary border border-primary/30'
                                    : 'bg-black/20 text-gray-400 hover:bg-white/5 hover:text-white border border-transparent'
                                    }`}
                            >
                                <span>{section.icon}</span>
                                <span className="font-medium">{section.title}</span>
                            </button>
                        ))}
                    </div>

                    {/* Form Fields container, scrollable */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-medium text-white">{currentSection.title}</h3>
                            <button
                                onClick={() => handleSave(activeSection)}
                                disabled={saving}
                                className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-colors font-medium flex items-center gap-2 text-sm shadow-lg shadow-primary/20"
                            >
                                {saving ? <Loader2 className="animate-spin" size={16} /> : <Save size={16} />}
                                <span>Save</span>
                            </button>
                        </div>

                        {currentSection.fields.map(field => (
                            <div key={field.key} className="space-y-2">
                                <label className="block text-sm font-medium text-gray-400">
                                    {field.label}
                                </label>
                                {field.type === 'textarea' ? (
                                    <textarea
                                        value={sectionData[field.key] || ''}
                                        onChange={(e) => handleFieldChange(activeSection, field.key, e.target.value)}
                                        rows={4}
                                        className="w-full bg-black/50 border border-white/10 rounded-xl py-2.5 px-3 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    />
                                ) : field.type === 'image' ? (
                                    <div className="flex flex-col gap-2">
                                        <input
                                            type="text"
                                            value={sectionData[field.key] || ''}
                                            onChange={(e) => handleFieldChange(activeSection, field.key, e.target.value)}
                                            className="w-full bg-black/50 border border-white/10 rounded-xl py-2.5 px-3 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                            placeholder="https://..."
                                        />
                                        {sectionData[field.key] && (
                                            <div className="h-24 w-full rounded-lg border border-white/10 overflow-hidden relative group">
                                                <img src={sectionData[field.key]} className="w-full h-full object-cover" alt="Preview" />
                                            </div>
                                        )}
                                    </div>
                                ) : field.type === 'color' ? (
                                    <div className="flex items-center gap-4">
                                        <input
                                            type="color"
                                            value={sectionData[field.key] || '#F58220'}
                                            onChange={(e) => handleFieldChange(activeSection, field.key, e.target.value)}
                                            className="w-12 h-12 bg-transparent border-0 rounded cursor-pointer p-0"
                                        />
                                        <input
                                            type="text"
                                            value={sectionData[field.key] || '#F58220'}
                                            onChange={(e) => handleFieldChange(activeSection, field.key, e.target.value)}
                                            className="bg-black/50 border border-white/10 rounded-xl py-2.5 px-3 text-sm text-white focus:border-[#F58220] outline-none"
                                        />
                                    </div>
                                ) : (
                                    <input
                                        type="text"
                                        value={sectionData[field.key] || ''}
                                        onChange={(e) => handleFieldChange(activeSection, field.key, e.target.value)}
                                        className="w-full bg-black/50 border border-white/10 rounded-xl py-2.5 px-3 text-sm text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Pane: Live Preview Area (2/3 width) */}
                <div className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden relative flex flex-col">
                    <div className="bg-[#111] border-b border-white/10 p-3 flex justify-between items-center z-10">
                        <div className="flex items-center gap-2 text-gray-400">
                            <Eye size={16} />
                            <span className="text-sm font-medium uppercase tracking-widest">Live Preview</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                        </div>
                    </div>

                    <div className="flex-1 overflow-auto relative elementor-preview-container bg-black">
                        {/* 
                            We wrap the active component in our SiteContentContext.Provider
                            and pass the LIVE 'content' state from the editor.
                            This overrides the main app provider specifically for this preview box.
                        */}
                        <SiteContentContext.Provider value={{ content, loading: false, refreshContent: async () => { } }}>
                            <div className="w-full pointer-events-none origin-top transition-all duration-300">
                                {ActiveComponent ? <ActiveComponent /> : <div className="p-10 text-center text-gray-500">Component not available for preview.</div>}
                            </div>
                        </SiteContentContext.Provider>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SiteContentEditor;
